
import React from "react";
import { LiveUpdatesProvider } from "@/store/liveUpdatesStore";
import MapLadakh from "@/components/MapLadakh";

export default function LiveUpdatesCurrentStatus() {
  return (
    <LiveUpdatesProvider>
      <section className="container mx-auto px-4 py-8 font-montserrat">
        <h1 className="text-3xl font-tinos font-bold text-crimson mb-2">
          Live Updates: Current Status
        </h1>
        <p className="text-jetblack mb-5">
          Check current status of Ladakh highways and get the latest weather updates at key attractions. Click on any road or pin for details.
        </p>
        <div className="bg-dairycream rounded-lg p-4 shadow">
          <MapLadakh />
        </div>
        <p className="mt-6 text-sm text-gray-700">
          Data updates automatically every 5 minutes. Manual refresh and search features will follow soon. API access provided by Mapbox and OpenWeatherMap.
        </p>
      </section>
    </LiveUpdatesProvider>
  );
}
