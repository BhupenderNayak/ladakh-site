
import React from "react";

type AttractionCardProps = {
  name: string;
  description: string;
  weather?: {
    temperature: string;
    wind: string;
    precipitation: string;
    icon?: string;
  } | null;
  details: {
    altitude: number;
    openingHours: string;
    permits: string;
  };
  lastUpdated?: string;
  onClose?: () => void;
};

export default function AttractionCard({
  name,
  description,
  weather,
  details,
  lastUpdated,
  onClose,
}: AttractionCardProps) {
  return (
    <aside
      className="fixed bottom-0 right-0 z-50 max-w-sm w-full bg-white shadow-lg border-l-4 border-saffron px-6 py-5 rounded-tl-xl font-montserrat transition-all"
      aria-label={`Weather and info for ${name}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-saffron">{name}</h2>
        {onClose && (
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-full border border-gray-200 p-1 hover:bg-gray-50"
          >
            <span className="text-jetblack text-lg">&times;</span>
          </button>
        )}
      </div>
      <div className="mb-2 text-jetblack">{description}</div>
      <div className="space-y-2 mb-2">
        {weather ? (
          <div className="flex gap-3 items-center">
            {weather.icon && (
              <img src={weather.icon} alt="Weather icon" className="w-8 h-8" />
            )}
            <span>
              <strong>Temp: </strong>
              {weather.temperature}
            </span>
            <span>
              <strong>Wind: </strong>
              {weather.wind}
            </span>
            <span>
              <strong>Precip: </strong>
              {weather.precipitation}
            </span>
          </div>
        ) : (
          <div className="italic text-gray-400">Weather data unavailable</div>
        )}
        <div>
          <strong>Altitude:</strong> {details.altitude}m
        </div>
        <div>
          <strong>Hours:</strong> {details.openingHours}
        </div>
        <div>
          <strong>Permits:</strong> {details.permits}
        </div>
        {lastUpdated && (
          <div className="text-sm text-gray-500">
            Last update: {new Date(lastUpdated).toLocaleString()}
          </div>
        )}
      </div>
    </aside>
  );
}
