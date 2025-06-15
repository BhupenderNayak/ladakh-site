
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CulturalHeritageHighlight = () => {
  return (
    <div className="my-24 bg-dairycream/50 rounded-2xl shadow-lg overflow-hidden border-2 border-saffron/20 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img 
            src="/lovable-uploads/800f60ca-1a82-47db-bbab-599ecab70898.png" 
            alt="Dancers performing the traditional Cham dance in a monastery courtyard in Ladakh." 
            className="h-64 w-full object-cover md:h-full"
            loading="lazy"
          />
        </div>
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-saffron mb-2">A Celebration of Heritage</h3>
          <h2 className="font-tinos text-3xl font-bold text-crimson mb-4">
            Living Culture, Global Recognition
          </h2>
          <p className="text-jetblack/80 mb-6 leading-relaxed text-base">
            Ladakh's vibrant festivals, like the famous Hemis Festival, are more than just spectacles; they are the living, breathing heart of our cultural identity. These ancient traditions have earned global acclaim, including recognition as a <span className="font-semibold text-crimson">UNESCO Intangible Cultural Heritage</span>. This highlights our commitment to preserving the unique customs that make Ladakh so special.
          </p>
          <Button asChild className="bg-crimson hover:bg-crimson/90 mt-auto self-start group">
            <a href="/festivals-and-events">
              Explore Our Festivals
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CulturalHeritageHighlight;
