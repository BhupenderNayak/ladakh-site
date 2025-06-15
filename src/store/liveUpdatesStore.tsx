
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

// --- Dummy Data ---
const DUMMY_HIGHWAYS: HighwayStatus[] = [
  {
    id: "leh-manali",
    name: "Leh–Manali Highway",
    coordinates: [
      [77.5723, 34.1533],
      [77.3303, 33.9200],
      [77.1000, 33.5000],
    ],
    status: "open",
    travelTime: "6–8h",
    alert: "Expect delays at Baralacha La due to snow clearance.",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "leh-srinagar",
    name: "Leh–Srinagar Highway",
    coordinates: [
      [77.5856, 34.1701],
      [75.9528, 34.2400],
      [74.7973, 34.0836],
    ],
    status: "closed",
    travelTime: null,
    alert: "Highway closed at Zojila Pass due to avalanche risk.",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "nubra-valley-road",
    name: "Leh–Nubra Valley",
    coordinates: [
      [77.5833, 34.1667],
      [77.6006, 34.2781],
      [77.7633, 34.5537],
    ],
    status: "open",
    travelTime: "3–4h",
    lastUpdated: new Date().toISOString(),
  },
];

const DUMMY_ATTRACTIONS: AttractionWeather[] = [
  {
    id: "hemis",
    name: "Hemis Monastery",
    description: "Largest monastery of Ladakh, known for Hemis Festival.",
    coordinates: [77.7096, 33.9722],
    details: {
      altitude: 3636,
      openingHours: "8am–6pm",
      permits: "Not required",
    },
    weather: {
      temperature: "15°C",
      wind: "3m/s",
      precipitation: "0mm",
      icon: "https://openweathermap.org/img/wn/01d@2x.png",
    },
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "khardungla",
    name: "Khardung La",
    description: "One of the highest motorable roads in the world.",
    coordinates: [77.6006, 34.2781],
    details: {
      altitude: 5359,
      openingHours: "24/7 (weather permitting)",
      permits: "Required (Inner Line)",
    },
    weather: {
      temperature: "-7°C",
      wind: "9m/s",
      precipitation: "1mm",
      icon: "https://openweathermap.org/img/wn/13d@2x.png",
    },
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "pangong",
    name: "Pangong Lake",
    description: "Famous blue lake changing hues with sun and clouds.",
    coordinates: [78.3957, 33.7381],
    details: {
      altitude: 4250,
      openingHours: "All day (May-Oct best)",
      permits: "Required (Inner Line)",
    },
    weather: {
      temperature: "6°C",
      wind: "6m/s",
      precipitation: "0mm",
      icon: "https://openweathermap.org/img/wn/03d@2x.png",
    },
    lastUpdated: new Date().toISOString(),
  },
];

// --- End Dummy Data ---

export function LiveUpdatesProvider({ children }: { children: React.ReactNode }) {
  const [highways, setHighways] = useState<HighwayStatus[]>(DUMMY_HIGHWAYS);
  const [attractions, setAttractions] = useState<AttractionWeather[]>(DUMMY_ATTRACTIONS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simulate fetch: just set dummy data and loading state
  const fetchHighways = useCallback(async (_mapboxToken?: string) => {
    setLoading(true);
    setTimeout(() => {
      setHighways(DUMMY_HIGHWAYS.map(r => ({
        ...r,
        lastUpdated: new Date().toISOString(),
      })));
      setLoading(false);
      setError(null);
    }, 800); // Simulate small delay
  }, []);

  const fetchAttractions = useCallback(async (_weatherApiKey?: string) => {
    setLoading(true);
    setTimeout(() => {
      setAttractions(DUMMY_ATTRACTIONS.map(a => ({
        ...a,
        lastUpdated: new Date().toISOString(),
      })));
      setLoading(false);
      setError(null);
    }, 800);
  }, []);

  const refresh = useCallback(
    async (_mapboxToken?: string, _weatherApiKey?: string) => {
      await fetchHighways();
      await fetchAttractions();
    },
    [fetchHighways, fetchAttractions]
  );

  // On mount, set data
  React.useEffect(() => {
    setHighways(DUMMY_HIGHWAYS);
    setAttractions(DUMMY_ATTRACTIONS);
  }, []);

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

// --- This file is growing large; consider splitting store logic/types if you want it cleaner!
