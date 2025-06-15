
import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import AwardsHeader from "@/components/AwardsHeader";
import AwardsList from "@/components/AwardsList";
import JourneyContinues from "@/components/JourneyContinues";
import CulturalHeritageHighlight from "@/components/CulturalHeritageHighlight";

const AwardsRecognition = () => {
  return (
    <div className="min-h-screen bg-offwhite font-montserrat">
      <Helmet>
        <title>Awards & Recognition - Ladakh Tourism</title>
        <meta name="description" content="Discover the prestigious awards and international recognition that Ladakh has received for its stunning landscapes, sustainable tourism, and cultural heritage." />
      </Helmet>
      
      <Header />
      <AwardsHeader />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-tinos text-crimson mb-4 animate-fade-in-up">
                Our Collection of Accolades
            </h2>
            <p className="text-lg text-jetblack/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Ladakh's commitment to excellence and sustainable tourism has been recognized by prestigious organizations worldwide. Explore our awards below.
            </p>
            <div className="h-1 w-20 bg-saffron mx-auto mt-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}></div>
        </div>
        <AwardsList />
        <CulturalHeritageHighlight />
        <JourneyContinues />
      </main>
    </div>
  );
};

export default AwardsRecognition;
