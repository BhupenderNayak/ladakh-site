
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Festival } from '@/data/festivals-data';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

interface MarqueeFestivalsCarouselProps {
  festivals: Festival[];
}

const MarqueeFestivalsCarousel: React.FC<MarqueeFestivalsCarouselProps> = ({ festivals }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div className="w-full mb-16">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {festivals.map((festival) => (
            <CarouselItem key={festival.id}>
              <div className="relative rounded-2xl shadow-lg overflow-hidden h-[500px] md:h-[550px] flex items-end p-6 md:p-12 text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <img
                  src={`${festival.image.split('?')[0]}?w=1200&h=600&fit=crop&auto=format&q=80`}
                  alt={`Vibrant scene from ${festival.name}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="relative z-20 w-full animate-fade-in-up">
                  <h3 className="text-3xl md:text-5xl font-bold font-tinos mb-3 drop-shadow-lg">{festival.name}</h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-base md:text-lg">
                    <div className="flex items-center gap-2 drop-shadow-sm">
                      <Calendar size={20} />
                      <span>{festival.dateRange}</span>
                    </div>
                    <div className="flex items-center gap-2 drop-shadow-sm">
                      <MapPin size={20} />
                      <span>{festival.location}</span>
                    </div>
                  </div>
                  <p className="max-w-xl mb-6 text-base md:text-lg leading-relaxed drop-shadow-md">
                    {festival.blurb}
                  </p>
                  <Link to={`/festivals/${festival.id}`}>
                    <Button size="lg" className="bg-saffron hover:bg-saffron/90 text-white font-semibold shadow-md transition-transform hover:scale-105">
                      Discover More
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 right-8 z-20 hidden md:flex gap-2">
            <CarouselPrevious className="static translate-x-0 translate-y-0 bg-white/20 border-white/50 text-white hover:bg-white/30" />
            <CarouselNext className="static translate-x-0 translate-y-0 bg-white/20 border-white/50 text-white hover:bg-white/30" />
        </div>
      </Carousel>
    </div>
  );
};

export default MarqueeFestivalsCarousel;
