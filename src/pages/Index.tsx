
import React from 'react';
import Header from '@/components/Header';
import TopDestinations from '@/components/TopDestinations';
import FeaturedFestivals from '@/components/FeaturedFestivals';
import PlanTripCta from '@/components/PlanTripCta';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import QuickAccess from '@/components/QuickAccess';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <QuickAccess />
        <TopDestinations />
        <FeaturedFestivals />
        <PlanTripCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
