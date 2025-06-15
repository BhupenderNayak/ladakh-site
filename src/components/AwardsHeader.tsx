
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Pause, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ParticlesComponent from "./ParticlesComponent";
import { HERO_IMAGES } from "@/data/awards-data";

interface AwardsHeaderProps {
  offsetY: number;
}

const AwardsHeader: React.FC<AwardsHeaderProps> = ({ offsetY }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const autoplayPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }));

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const togglePlay = useCallback(() => {
    const autoplay = autoplayPlugin.current;
    if (!api || !autoplay) return;

    if (isPlaying) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
    setIsPlaying((prev) => !prev);
  }, [api, isPlaying]);

  return (
    <header className="relative h-[85vh] md:h-[90vh] text-white shadow-2xl overflow-hidden flex items-end justify-center text-center">
      <ParticlesComponent />
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        className="absolute inset-0 w-full h-full z-0"
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {HERO_IMAGES.map((img) => (
            <CarouselItem key={img.src} className="h-full relative overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                style={{ transform: `translateY(${offsetY * 0.3}px) scale(1.1)` }}
                className="w-full h-full object-cover transition-transform duration-100 ease-out"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 bg-saffron/70 mix-blend-multiply z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-jetblack/60 via-jetblack/20 to-transparent z-10" />
      
      <div className="relative container mx-auto px-4 z-30 pb-16 pt-32">
        <h1 className="text-4xl lg:text-5xl font-bold font-montserrat text-white mb-4 tracking-wider leading-tight animate-fade-in-up">
          Awards & Recognition
          <span className="block h-1 mt-3 bg-saffron w-24 mx-auto animate-underline-grow origin-center" />
        </h1>
        <p className="text-base lg:text-lg font-tinos text-dairycream/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Ladakh shines on the global stage, earning prestigious accolades for its breathtaking landscapes, 
          sustainable tourism initiatives, thrilling adventures, and rich cultural heritage.
        </p>
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
           <h2 className="text-2xl lg:text-3xl font-bold text-white font-tinos mb-2">
              Our Distinguished Achievements
           </h2>
           <p className="text-base text-dairycream/80 max-w-3xl mx-auto leading-relaxed">
              From international travel awards to UNESCO recognition, Ladakh continues to be celebrated for its commitment to excellence and sustainability.
           </p>
        </div>
      </div>

      <button
        onClick={togglePlay}
        className="absolute bottom-5 right-5 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Slide ${current} of ${count}: ${HERO_IMAGES[current - 1]?.alt || ''}`}
      </div>
    </header>
  );
};

export default AwardsHeader;
