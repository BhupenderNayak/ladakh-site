
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import RoadStatusCard from "./RoadStatusCard";
import AttractionCard from "./AttractionCard";
import { useLiveUpdates } from "@/store/liveUpdatesStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Selected =
  | { type: "road"; id: string }
  | { type: "attraction"; id: string }
  | null;

interface MapLadakhProps {}

const LADAKH_BOUNDS: [[number, number], [number, number]] = [
  [76.3, 32.8], // SW
  [79.1, 35.1], // NE
];

export default function MapLadakh({}: MapLadakhProps) {
  // API key UI for Mapbox
  const [mapboxToken, setMapboxToken] = useState(localStorage.getItem("mapboxToken") || "");
  const [weatherApiKey, setWeatherApiKey] = useState(localStorage.getItem("weatherApiKey") || "");
  const [selected, setSelected] = useState<Selected>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const { highways, attractions, refresh, loading, error, fetchHighways, fetchAttractions } =
    useLiveUpdates();

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // On API key change, persist and refetch
  useEffect(() => {
    if (mapboxToken) {
      localStorage.setItem("mapboxToken", mapboxToken);
      fetchHighways(mapboxToken);
    }
    // eslint-disable-next-line
  }, [mapboxToken]);
  useEffect(() => {
    if (weatherApiKey) {
      localStorage.setItem("weatherApiKey", weatherApiKey);
      fetchAttractions(weatherApiKey);
    }
    // eslint-disable-next-line
  }, [weatherApiKey]);

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current) return;

    mapboxgl.accessToken = mapboxToken;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      bounds: LADAKH_BOUNDS,
      fitBoundsOptions: { padding: 40 },
      minZoom: 6,
      maxZoom: 13,
      attributionControl: false,
    });

    // Add navigation controls, disables scroll zoom for UX
    map.current.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "top-right");
    map.current.scrollZoom.disable();

    // Accessibility: ARIA
    map.current.getContainer().setAttribute("aria-label", "Ladakh Interactive Map of Status");
    map.current.getContainer().tabIndex = 0;

    // Add highways as geojson line layer
    map.current.on("load", () => {
      if (highways.length > 0) {
        map.current &&
          map.current.addSource("ladakh-highways", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: highways.map((road) => ({
                type: "Feature",
                geometry: {
                  type: "LineString",
                  coordinates: road.coordinates,
                },
                properties: {
                  id: road.id,
                  name: road.name,
                  status: road.status,
                },
              })),
            },
          });

        map.current &&
          map.current.addLayer({
            id: "highway-lines",
            type: "line",
            source: "ladakh-highways",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": [
                "match",
                ["get", "status"],
                "open", "#FF9E1B", // saffron for open
                "closed", "#760504", // crimson for closed
                "#090A0E", // jet black as fallback
              ],
              "line-width": [
                "interpolate",
                ["linear"],
                ["zoom"],
                6, 3,
                11, 10,
              ],
              "line-opacity": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                1,
                0.7,
              ],
            },
          });

        // Road interactivity (hover/click)
        let hoveredRoadId: string | null = null;

        map.current?.on("mousemove", "highway-lines", (e: any) => {
          map.current!.getCanvas().style.cursor = "pointer";
          if (e.features && e.features.length) {
            const feat = e.features[0];
            if (hoveredRoadId) {
              map.current!.setFeatureState(
                { source: "ladakh-highways", id: hoveredRoadId },
                { hover: false }
              );
            }
            hoveredRoadId = feat.id;
            setHovered(feat.properties.id);
            map.current!.setFeatureState(
              { source: "ladakh-highways", id: feat.id },
              { hover: true }
            );
          }
        });

        map.current?.on("mouseleave", "highway-lines", (e: any) => {
          map.current!.getCanvas().style.cursor = "";
          if (hoveredRoadId) {
            map.current!.setFeatureState(
              { source: "ladakh-highways", id: hoveredRoadId },
              { hover: false }
            );
            hoveredRoadId = null;
          }
          setHovered(null);
        });

        map.current?.on("click", "highway-lines", (e: any) => {
          if (e.features && e.features.length) {
            const feat = e.features[0];
            setSelected({ type: "road", id: feat.properties.id });
          }
        });
      }

      // Add attractions as markers
      attractions.forEach((attr) => {
        const el = document.createElement("div");
        el.className = "bg-saffron border-2 border-crimson rounded-full w-6 h-6 flex items-center justify-center shadow-md";
        el.style.cursor = "pointer";
        el.setAttribute("role", "button");
        el.setAttribute("title", attr.name);
        el.setAttribute("aria-label", attr.name);
        el.tabIndex = 0;
        el.innerHTML = `<span style="font-size: 18px; color: #090A0E;" aria-hidden>${attr.name.charAt(0)}</span>`;

        el.addEventListener("click", () => {
          setSelected({ type: "attraction", id: attr.id });
        });

        el.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            setSelected({ type: "attraction", id: attr.id });
          }
        });

        new mapboxgl.Marker(el)
          .setLngLat(attr.coordinates)
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
    };
    // eslint-disable-next-line
  }, [mapboxToken, highways, attractions]);

  // Find selected
  const selectedRoad = selected?.type === "road"
      ? highways.find((rd) => rd.id === selected.id)
      : null;
  const selectedAttraction = selected?.type === "attraction"
      ? attractions.find((a) => a.id === selected.id)
      : null;

  return (
    <div className="relative w-full min-h-[500px]">
      <div className="flex flex-col sm:flex-row gap-2 mb-2 items-center">
        <label className="font-montserrat font-medium text-sm flex items-center gap-2">
          Mapbox&nbsp;Token:
          <Input
            type="password"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="w-[240px]"
            aria-label="Mapbox Public Token"
            placeholder="Your Mapbox public token"
          />
        </label>
        <label className="font-montserrat font-medium text-sm flex items-center gap-2">
          Weather API&nbsp;Key:
          <Input
            type="password"
            value={weatherApiKey}
            onChange={(e) => setWeatherApiKey(e.target.value)}
            className="w-[240px]"
            aria-label="Weather API key"
            placeholder="Your OpenWeatherMap API Key"
          />
        </label>
        <Button
          onClick={() => refresh(mapboxToken, weatherApiKey)}
          className="bg-crimson text-white font-semibold"
          size="sm"
        >
          Refresh
        </Button>
        {loading && <span className="ml-2 text-saffron">Loading...</span>}
        {error && <span className="ml-2 text-crimson">{error}</span>}
      </div>
      <div ref={mapContainer} className="rounded-lg shadow-lg min-h-[400px] w-full" style={{height: 500}} />
      {/* Tooltips on hover */}
      {hovered && (
        <div
          className="absolute left-8 bottom-4 bg-black text-saffron rounded px-3 py-1 pointer-events-none"
          role="tooltip"
          aria-live="polite"
        >
          {highways.find((r) => r.id === hovered)?.name}
        </div>
      )}
      {/* Cards */}
      {selectedRoad && (
        <RoadStatusCard
          {...selectedRoad}
          onClose={() => setSelected(null)}
        />
      )}
      {selectedAttraction && (
        <AttractionCard
          {...selectedAttraction}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
