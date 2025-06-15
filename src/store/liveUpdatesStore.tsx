
import React, { createContext, useContext, useState, useCallback } from "react";

type HighwayStatus = {
  id: string;
  name: string;
  coordinates: [number, number][];
  status: "open" | "closed";
  travelTime: string | null;
  alert?: string;
  lastUpdated: string;
};

type AttractionWeather = {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number];
  details: {
    altitude: number;
    openingHours: string;
    permits: string;
  };
  weather: {
    temperature: string;
    wind: string;
    precipitation: string;
    icon?: string;
  } | null;
  lastUpdated: string;
};

type LiveUpdatesState = {
  highways: HighwayStatus[];
  attractions: AttractionWeather[];
  fetchHighways: (mapboxToken?: string) => Promise<void>;
  fetchAttractions: (weatherApiKey?: string) => Promise<void>;
  refresh: (mapboxToken?: string, weatherApiKey?: string) => void;
  loading: boolean;
  error: string | null;
};

const LiveUpdatesContext = createContext<LiveUpdatesState | undefined>(undefined);

// Helper for caching (5 min)
const CACHE_DURATION = 5 * 60 * 1000;
let lastFetchTime = 0;
let cache: { highways: HighwayStatus[]; attractions: AttractionWeather[]; } = {
  highways: [],
  attractions: [],
};

export function LiveUpdatesProvider({ children }: { children: React.ReactNode }) {
  const [highways, setHighways] = useState<HighwayStatus[]>([]);
  const [attractions, setAttractions] = useState<AttractionWeather[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHighways = useCallback(async (mapboxToken?: string) => {
    setLoading(true);
    setError(null);

    // Example using a demo GeoJSON endpoint or Mapbox Traffic
    try {
      // Replace with real API and parse accordingly.
      let featuresResponse = await fetch(
        `https://data.ladakh-tourism-status/api/highways.json`
      );
      if (!featuresResponse.ok) throw new Error("Unable to fetch highway data");
      let data = await featuresResponse.json();
      
      // Format highways as needed (simulate sample data)
      const formatted: HighwayStatus[] = data.features.map(
        (f: any, idx: number) => ({
          id: f.properties.id ?? `road-${idx}`,
          name: f.properties.name,
          coordinates: f.geometry.coordinates,
          status: f.properties.status ?? "open",
          travelTime: f.properties.travelTime ?? null,
          alert: f.properties.alert,
          lastUpdated: f.properties.updatedAt || new Date().toISOString(),
        })
      );
      setHighways(formatted);
      cache.highways = formatted;
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchAttractions = useCallback(async (weatherApiKey?: string) => {
    setLoading(true);
    setError(null);

    // Sample hardcoded attractions list
    const mainAttractions = [
      {
        id: "hemis",
        name: "Hemis Monastery",
        coordinates: [77.7096, 33.9722],
        description: "Largest monastery of Ladakh, known for Hemis Festival.",
        details: {
          altitude: 3636,
          openingHours: "8am–6pm",
          permits: "Not required",
        },
      },
      {
        id: "khardungla",
        name: "Khardung La",
        coordinates: [77.6006, 34.2781],
        description: "One of the highest motorable roads in the world.",
        details: {
          altitude: 5359,
          openingHours: "24/7 (weather permitting)",
          permits: "Required (Inner Line)",
        },
      },
      {
        id: "pangong",
        name: "Pangong Lake",
        coordinates: [78.3957, 33.7381],
        description: "Famous blue lake changing hues with sun and clouds.",
        details: {
          altitude: 4250,
          openingHours: "All day (May-Oct best)",
          permits: "Required (Inner Line)",
        },
      },
      // Add more...
    ];

    // Fetch weather for all
    const result: AttractionWeather[] = [];
    for (const attr of mainAttractions) {
      let weather: AttractionWeather["weather"] = null;
      let lastUpdated = new Date().toISOString();
      if (weatherApiKey) {
        try {
          const weatherResp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${attr.coordinates[1]}&lon=${attr.coordinates[0]}&units=metric&appid=${weatherApiKey}`
          );
          const weatherData = await weatherResp.json();
          weather = {
            temperature: String(weatherData.main.temp) + "°C",
            wind: String(weatherData.wind.speed) + "m/s",
            precipitation: weatherData.rain
              ? `${weatherData.rain["1h"]}mm`
              : "0mm",
            icon: weatherData.weather?.[0]?.icon
              ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
              : undefined,
          };
          lastUpdated = new Date(weatherData.dt * 1000).toISOString();
        } catch (e) {
          // gracefully ignore, fallback to null weather
        }
      }
      result.push({
        ...attr,
        weather,
        lastUpdated,
      });
    }
    setAttractions(result);
    cache.attractions = result;
  }, []);

  const refresh = useCallback(
    async (mapboxToken?: string, weatherApiKey?: string) => {
      await fetchHighways(mapboxToken);
      await fetchAttractions(weatherApiKey);
      lastFetchTime = Date.now();
    },
    [fetchHighways, fetchAttractions]
  );

  // On mount / on cache-expiry, refetch
  React.useEffect(() => {
    const fetchIfNeeded = () => {
      if (Date.now() - lastFetchTime > CACHE_DURATION) {
        refresh();
      } else {
        setHighways(cache.highways || []);
        setAttractions(cache.attractions || []);
      }
    };
    fetchIfNeeded();
    // Setup timer for auto-refresh
    const interval = setInterval(() => {
      refresh();
    }, CACHE_DURATION);
    return () => clearInterval(interval);
  }, [refresh]);
  
  return (
    <LiveUpdatesContext.Provider
      value={{
        highways,
        attractions,
        fetchHighways,
        fetchAttractions,
        refresh,
        loading,
        error,
      }}
    >
      {children}
    </LiveUpdatesContext.Provider>
  );
}

export function useLiveUpdates() {
  const ctx = useContext(LiveUpdatesContext);
  if (!ctx) {
    throw new Error("Must useLiveUpdates within LiveUpdatesProvider");
  }
  return ctx;
}
