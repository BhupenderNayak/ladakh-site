
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Festival } from '@/data/festivals-data';

interface FestivalCardProps {
  festival: Festival;
}

const FestivalCard: React.FC<FestivalCardProps> = ({ festival }) => {
  const Icon = festival.icon;
  return (
    <div className="group relative transition-all duration-300 ease-in-out transform hover:-translate-y-1.5">
      <Card className="overflow-hidden h-full flex flex-col group-hover:shadow-xl transition-shadow duration-300">
        <div className="overflow-hidden">
          <img 
            src={`${festival.image}&w=500&h=300&fit=crop`}
            alt={`Image of ${festival.name}`}
            className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            width="500"
            height="300"
            loading="lazy"
          />
        </div>
        <CardContent className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold text-jetblack font-montserrat mb-1">
            {festival.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-jetblack font-tinos mb-2">
            <Icon className="text-saffron shrink-0" size={16} />
            <span>{festival.dateRange} &bull; {festival.location}</span>
          </div>
          <p className="text-sm text-gray-700 font-montserrat leading-relaxed flex-grow">
            {festival.blurb}
          </p>
          <Button 
            variant="default" 
            className="mt-4 w-full bg-saffron text-white hover:bg-saffron/90 group-hover:animate-button-pulse"
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FestivalCard;
