
import React from "react";
import AwardCard from "@/components/AwardCard";
import { AWARDS } from "@/data/awards-data";

const AwardsList = () => {
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {AWARDS.map((award, idx) => (
        <div
          key={idx}
          className="animate-fade-in-up"
          style={{ animationDelay: `${idx * 150}ms`, opacity: 0 }}
        >
          <AwardCard {...award} />
        </div>
      ))}
    </div>
  );
};

export default AwardsList;
