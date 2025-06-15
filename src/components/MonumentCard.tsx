
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { Monument } from '@/data/monuments-data';

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({ monument }) => {
  return (
    <div className="group relative transition-all duration-300 ease-in-out transform hover:-translate-y-1.5">
      <Card className="overflow-hidden h-full flex flex-col group-hover:shadow-xl transition-shadow duration-300 border group-hover:border-saffron">
        <div className="overflow-hidden aspect-[4/3] rounded-t-lg">
          <img 
            src={monument.image}
            alt={`Image of ${monument.name}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardContent className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold text-jetblack font-montserrat mb-1">
            {monument.name}
          </h3>
          <div className="text-sm text-jetblack font-tinos italic mb-2">
            <span>{monument.location} &bull; {monument.era}</span>
          </div>
          <p className="text-sm text-gray-700 font-montserrat leading-relaxed flex-grow">
            {monument.description}
          </p>
          <a href="#" className="block mt-4 text-sm font-semibold text-crimson hover:underline">
            Learn More
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonumentCard;
