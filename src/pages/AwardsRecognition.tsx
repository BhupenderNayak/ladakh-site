
import React from "react";
import AwardCard from "@/components/AwardCard";
import { Helmet } from "react-helmet";

const AWARDS = [
  {
    image: "/stock/photo-1482938289607-e9573fc25ebb.jpg",
    title: "Best Responsible Tourism Destination (India)",
    description: "Awarded by the Ministry of Tourism, Ladakh has been recognized for its sustainable and responsible tourism practices, preserving ecological and cultural heritage.",
    year: 2024,
    icon: "award",
    link: "https://www.tourism.gov.in/awards2024/ladakh",
  },
  {
    image: "/stock/photo-1472396961693-142e6e269027.jpg",
    title: "Asia's Most Picturesque Travel Region",
    description: "Ladakh was named one of the most picturesque places in Asia by leading travel publications for its breathtaking Himalayan landscapes and monastic culture.",
    year: "2023",
    icon: "medal",
    link: "https://www.lonelyplanet.com/articles/ladakh-most-beautiful",
  },
  {
    image: "/stock/photo-1615729947596-a598e5de0ab3.jpg",
    title: "UNESCO Intangible Cultural Heritage",
    description: "Several Ladakhi festivals and traditions are now recognized by UNESCO, promoting preservation of Ladakh's unique Buddhist festivals and living heritage.",
    year: 2022,
    icon: "award",
    link: "https://ich.unesco.org/en/lists",
  },
  {
    image: "/stock/photo-1469474968028-56623f02e42e.jpg",
    title: "Adventure Capital of India",
    description: "National Geographic ranked Ladakh as the top adventure destination in India, highlighting its trekking, rafting, and high-altitude cycling routes.",
    year: 2021,
    icon: "medal",
    link: "https://www.natgeotraveller.in/ladakh-adventure-capital/",
  },
  {
    image: "/stock/photo-1501854140801-50d01698950b.jpg",
    title: "Best Mountain Destination",
    description: "Awarded at the India Tourism Award, Ladakh’s unique landscape and welcoming hospitality earned it the title of Best Mountain Destination.",
    year: "2020",
    icon: "award",
    link: null,
  },
];

const AwardsRecognition = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Helmet>
        <title>Awards & Recognition - Ladakh Tourism</title>
      </Helmet>
      <header className="bg-dairycream border-b-2 border-crimson py-8 text-center shadow-sm">
        <h1 className="text-4xl lg:text-5xl font-bold text-crimson font-tinos mb-3">
          Awards & Recognition
        </h1>
        <p className="text-xl text-jetblack mx-auto max-w-2xl font-montserrat">
          Ladakh shines on the global stage, earning accolades for its breathtaking landscapes, sustainable tourism, adventure, and cultural richness. Here are some honors we’re proud of!
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map((award, idx) => (
            <AwardCard key={idx} {...award} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AwardsRecognition;

