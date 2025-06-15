
import React from "react";

type RoadStatusCardProps = {
  name: string;
  status: "open" | "closed";
  travelTime: string | null;
  alert?: string;
  lastUpdated: string;
  onClose?: () => void;
};

export default function RoadStatusCard({
  name,
  status,
  travelTime,
  alert,
  lastUpdated,
  onClose,
}: RoadStatusCardProps) {
  return (
    <aside
      className="fixed bottom-0 right-0 z-50 max-w-sm w-full bg-white shadow-lg border-l-4 border-crimson px-6 py-5 rounded-tl-xl font-montserrat transition-all"
      aria-label={`Status for ${name}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-crimson">{name}</h2>
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
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span
            className={`inline-block w-3 h-3 rounded-full ${
              status === "open"
                ? "bg-saffron"
                : "bg-crimson"
            }`}
            aria-label={status === "open" ? "Open" : "Closed"}
          />
          <strong className="text-jetblack">Status:</strong>
          <span
            className={`font-semibold ${
              status === "open" ? "text-saffron" : "text-crimson"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        <div>
          <strong className="text-jetblack">Travel Time:</strong>{" "}
          <span>{travelTime ? travelTime : "—"}</span>
        </div>
        {alert && (
          <div className="text-crimson">
            <strong>Alert: </strong> {alert}
          </div>
        )}
        <div className="text-sm text-gray-500">
          <span>Last update:</span>{" "}
          {new Date(lastUpdated).toLocaleString()}
        </div>
      </div>
    </aside>
  );
}
