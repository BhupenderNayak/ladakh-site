
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AwardsHeader from "@/components/AwardsHeader";
import AwardsList from "@/components/AwardsList";
import JourneyContinues from "@/components/JourneyContinues";

const AwardsRecognition = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-offwhite font-montserrat">
      <Helmet>
        <title>Awards & Recognition - Ladakh Tourism</title>
        <meta name="description" content="Discover the prestigious awards and international recognition that Ladakh has received for its stunning landscapes, sustainable tourism, and cultural heritage." />
      </Helmet>
      
      <AwardsHeader offsetY={offsetY} />

      <main className="container mx-auto px-4 py-16">
        <AwardsList />
        <JourneyContinues />
      </main>
    </div>
  );
};

export default AwardsRecognition;
