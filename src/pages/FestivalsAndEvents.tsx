
import React from 'react';
import { Helmet } from 'react-helmet';
import FestivalsHero from '@/components/FestivalsHero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FESTIVALS_DATA } from '@/data/festivals-data';
import FestivalsGrid from '@/components/FestivalsGrid';
import Header from '@/components/Header';

const FestivalsAndEvents = () => {
  const upcomingFestivals = FESTIVALS_DATA.filter(f => f.isUpcoming);
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-tinos text-crimson">Festivals & Events</h2>
          <p className="text-lg text-jetblack mt-2 max-w-2xl mx-auto">
            Experience the vibrant soul of Ladakh through its rich tapestry of festivals and events.
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <FestivalsGrid festivals={upcomingFestivals} />
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
