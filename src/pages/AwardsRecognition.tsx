
import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import AwardCard, { AwardCardProps } from "@/components/AwardCard";
import { Helmet } from "react-helmet";
import { Star, Pause, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";

const AWARDS: AwardCardProps[] = [
  {
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
    title: "Best Responsible Tourism Destination (India)",
    description: "Awarded by the Ministry of Tourism, Ladakh has been recognized for its sustainable and responsible tourism practices.",
    year: 2024,
    icon: "award",
    link: "https://www.tourism.gov.in",
  },
  {
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    title: "Asia's Most Picturesque Travel Region",
    description: "Named one of the most picturesque places in Asia for its breathtaking Himalayan landscapes and ancient monasteries.",
    year: "2023",
    icon: "medal",
    link: "https://www.lonelyplanet.com",
  },
  {
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
    title: "UNESCO Intangible Cultural Heritage",
    description: "Several Ladakhi festivals are now recognized by UNESCO, promoting preservation of its unique cultural heritage.",
    year: 2022,
    icon: "award",
    link: "https://ich.unesco.org",
  },
  {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    title: "Adventure Capital of India",
    description: "Ranked as the top adventure destination in India, highlighting its world-class trekking and mountaineering.",
    year: 2021,
    icon: "medal",
    link: "https://www.nationalgeographic.com",
  },
  {
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&h=600&fit=crop",
    title: "Best Mountain Destination",
    description: "Awarded for its unique landscape combining high-altitude deserts, pristine lakes, and warm hospitality.",
    year: "2020",
    icon: "award",
  },
  {
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
    title: "World's Best High-Altitude Desert",
    description: "Recognized for its unique cold desert ecosystem, rare wildlife, and stunning otherworldly landscapes.",
    year: 2019,
    icon: "medal",
  },
];

const HERO_IMAGES = [
  { src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1600&h=900&fit=crop&q=80", alt: "A serene river flowing through a vast valley surrounded by majestic, snow-dusted mountains under a cloudy sky." },
  { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1600&h=900&fit=crop&q=80", alt: "Two deer standing gracefully in a forest with tall trees and a mountain backdrop, symbolizing Ladakh's rich wildlife." },
  { src: "https://images.unsplash.com/photo-1595624248734-3f19a4a3e2e2?w=1600&h=900&fit=crop&q=80", alt: "A dramatic mountain peak piercing through the clouds, representing the high-altitude splendor of Ladakh." },
];

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      particles: {
        number: { value: 50, density: { enable: true, value_area: 1200 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.6, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.1, sync: false } },
        size: { value: 2.5, random: true },
        move: { enable: true, speed: 1, direction: "bottom", random: true, straight: false, out_mode: "out" },
      },
      interactivity: { events: { onhover: { enable: false }, onclick: { enable: false } } },
      retina_detect: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} className="absolute inset-0 z-10" />;
  }
  return null;
};


const AwardsRecognition = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const autoplayPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }));

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const togglePlay = useCallback(() => {
    if (!api) return;
    const player = autoplayPlugin.current.player;
    if (isPlaying) {
      player.stop();
    } else {
      player.play();
    }
    setIsPlaying((prev) => !prev);
  }, [api, isPlaying]);

  return (
    <div className="min-h-screen bg-offwhite font-montserrat">
      <Helmet>
        <title>Awards & Recognition - Ladakh Tourism</title>
        <meta name="description" content="Discover the prestigious awards and international recognition that Ladakh has received for its stunning landscapes, sustainable tourism, and cultural heritage." />
      </Helmet>
      
      <header className="relative h-[85vh] md:h-[90vh] text-white shadow-2xl overflow-hidden flex items-end justify-center text-center">
        <ParticlesComponent />
        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          className="absolute inset-0 w-full h-full"
          opts={{ loop: true }}
        >
          <CarouselContent className="h-full">
            {HERO_IMAGES.map((img, index) => (
              <CarouselItem key={index} className="h-full relative overflow-hidden">
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

        <div className="absolute inset-0 bg-saffron/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-jetblack/60 via-jetblack/20 to-transparent" />
        
        <div className="relative container mx-auto px-4 z-20 pb-16 pt-32">
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
          className="absolute bottom-5 right-5 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {`Slide ${current} of ${count}: ${HERO_IMAGES[current - 1]?.alt || ''}`}
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
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
        
        <div className="mt-24 text-center">
          <div className="bg-dairycream/50 rounded-2xl p-10 max-w-4xl mx-auto border-2 border-saffron/30 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-center mb-4 text-saffron">
              <Star size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-bold text-crimson font-tinos mb-4">
              The Journey Continues
            </h3>
            <p className="text-jetblack text-lg leading-relaxed max-w-3xl mx-auto">
              Ladakh's commitment to excellence is unwavering. We continue to strive for and anticipate more accolades 
              that recognize our unique culture, pristine environment, and warm hospitality. 
              Stay tuned for more exciting news!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AwardsRecognition;
