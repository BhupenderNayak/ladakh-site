
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FESTIVALS_DATA } from '@/data/festivals-data';

const FestivalsHero = () => {
  const marqueeFestivals = FESTIVALS_DATA.filter(f => f.isMarquee);

  return (
    <div className="relative -mt-20 h-[70vh] w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 7000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {marqueeFestivals.map((festival) => (
            <CarouselItem key={festival.id} className="h-full">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={`${festival.image}&w=1920&h=1080&fit=crop`}
                  alt={`Hero image for ${festival.name}`}
                  className="w-full h-full object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white drop-shadow-lg" style={{ color: '#FEF9E8' }}>
                    {festival.name}
                  </h1>
                  <p 
                    className="font-tinos italic text-lg md:text-xl mt-2 text-saffron drop-shadow-md"
                  >
                    {festival.dateRange}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 border-white/50 text-white" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 border-white/50 text-white" />
        </div>
      </Carousel>
    </div>
  );
};

export default FestivalsHero;
