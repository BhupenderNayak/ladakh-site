
import React from 'react';
import FestivalCard from './FestivalCard';
import { Festival } from '@/data/festivals-data';

interface FestivalsGridProps {
  festivals: Festival[];
}

const FestivalsGrid: React.FC<FestivalsGridProps> = ({ festivals }) => {
  if (!festivals.length) {
    return <p className="text-center text-gray-500 py-10">No festivals to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {festivals.map((festival, idx) => (
         <div
          key={festival.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${idx * 100}ms`, opacity: 0 }}
        >
            <FestivalCard festival={festival} />
        </div>
      ))}
    </div>
  );
};

export default FestivalsGrid;
