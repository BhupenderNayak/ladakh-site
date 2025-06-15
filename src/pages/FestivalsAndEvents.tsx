
import React from 'react';
import { Helmet } from 'react-helmet';
import FestivalsHero from '@/components/FestivalsHero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FESTIVALS_DATA } from '@/data/festivals-data';
import FestivalsGrid from '@/components/FestivalsGrid';
import Header from '@/components/Header';
import MarqueeFestivalsCarousel from '@/components/MarqueeFestivalsCarousel';

const FestivalsAndEvents = () => {
  const marqueeFestivals = FESTIVALS_DATA.filter(f => f.isMarquee);
  const upcomingFestivals = FESTIVALS_DATA.filter(f => f.isUpcoming && !f.isMarquee);
  const pastFestivals = FESTIVALS_DATA.filter(f => !f.isUpcoming);

  return (
    <div className="bg-offwhite min-h-screen font-montserrat">
      <Helmet>
        <title>Festivals & Events - Ladakh Tourism</title>
        <meta name="description" content="Explore the vibrant festivals and cultural events of Ladakh. Plan your trip around major celebrations like Hemis, Losar, and the Ladakh Festival." />
      </Helmet>
      
      <Header />
      <FestivalsHero />

      <main id="main-content" className="container mx-auto px-4 pt-4 sm:pt-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold font-tinos text-crimson">Festivals & Events</h2>
          <p className="text-lg text-jetblack mt-2 max-w-3xl mx-auto">
            Experience the vibrant soul of Ladakh through its rich tapestry of festivals and events. Our marquee celebrations draw visitors from around the globe.
          </p>
        </div>

        <MarqueeFestivalsCarousel festivals={marqueeFestivals} />

        <div className="text-center my-16">
          <h3 className="text-3xl lg:text-4xl font-bold font-tinos text-crimson">Explore All Festivals</h3>
          <p className="text-lg text-jetblack/80 mt-2 max-w-2xl mx-auto">
            Discover a year-round calendar of cultural and religious events.
          </p>
          <div className="h-1 w-20 bg-saffron mx-auto mt-4"></div>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
             {upcomingFestivals.length > 0 ? (
              <FestivalsGrid festivals={upcomingFestivals} />
            ) : (
              <div className="text-center py-12 px-6 bg-dairycream rounded-lg">
                <p className="text-lg text-jetblack/80">All major upcoming festivals are featured above. Check back later for more event announcements!</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="past">
            <FestivalsGrid festivals={pastFestivals} />
          </TabsContent>
        </Tabs>
        
        {/* The filter bar can be added here in a future step! */}
      </main>
    </div>
  );
};

export default FestivalsAndEvents;
