
import React from 'react';
import CulturePageLayout from './CulturePageLayout';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CRAFTS_DATA, ARTISANS_DATA } from '@/data/crafts-data';
import { Card, CardContent } from '@/components/ui/card';

const ArtAndCraftPage = () => {
  const intro = (
    <>
      Discover the soul of Ladakh through its vibrant art and exquisite handicrafts.
      Each piece is a testament to the skill and devotion of artisans who have preserved these traditions for centuries.
    </>
  );

  return (
    <CulturePageLayout
      pageTitle="Art & Craft"
      heroImage="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1920&h=1080&fit=crop&auto=format&q=80"
      introBlurb={intro}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-tinos text-crimson mb-4 text-center">Featured Crafts</h2>
        <Carousel
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
          className="w-full max-w-5xl mx-auto"
          opts={{ loop: true }}
        >
          <CarouselContent>
            {CRAFTS_DATA.map((craft) => (
              <CarouselItem key={craft.id}>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <img src={craft.image} alt={craft.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-2xl font-bold text-saffron font-montserrat">{craft.name}</h3>
                    <p className="text-white mt-1">{craft.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px] hidden md:inline-flex" />
          <CarouselNext className="right-[-50px] hidden md:inline-flex" />
        </Carousel>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold font-tinos text-crimson mb-4 text-center">Meet the Artisans</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ARTISANS_DATA.map(artisan => (
            <div key={artisan.id} className="group relative transition-all duration-300 ease-in-out transform hover:-translate-y-1.5">
              <Card className="overflow-hidden h-full flex flex-col group-hover:shadow-xl transition-shadow duration-300 border group-hover:border-saffron">
                <div className="overflow-hidden aspect-square rounded-t-lg">
                  <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" loading="lazy" />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-jetblack">{artisan.name}</h3>
                  <p className="text-sm text-gray-700">{artisan.craft}</p>
                  <a href={artisan.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-semibold text-crimson hover:underline">
                    Visit Workshop
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-tinos text-crimson mb-4 text-center">How It's Made: Thangka Painting</h2>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/vb24_hJ3_Sg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">Video Transcript</summary>
            <p className="mt-2 text-sm text-gray-700">
              (This is a placeholder for the video transcript to ensure accessibility. A real transcript would be provided here.)
            </p>
          </details>
        </div>
      </section>
    </CulturePageLayout>
  );
};

export default ArtAndCraftPage;
