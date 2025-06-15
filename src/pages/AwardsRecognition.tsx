
import React from "react";
import AwardCard from "@/components/AwardCard";
import { Helmet } from "react-helmet";
import { Star } from "lucide-react";

const AWARDS = [
  {
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
    title: "Best Responsible Tourism Destination (India)",
    description: "Awarded by the Ministry of Tourism, Ladakh has been recognized for its sustainable and responsible tourism practices, preserving ecological and cultural heritage while promoting community-based tourism.",
    year: 2024,
    icon: "award" as const,
    link: "https://www.tourism.gov.in",
  },
  {
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    title: "Asia's Most Picturesque Travel Region",
    description: "Ladakh was named one of the most picturesque places in Asia by leading travel publications for its breathtaking Himalayan landscapes, ancient monasteries, and unique high-altitude desert terrain.",
    year: "2023",
    icon: "medal" as const,
    link: "https://www.lonelyplanet.com",
  },
  {
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
    title: "UNESCO Intangible Cultural Heritage Recognition",
    description: "Several Ladakhi festivals and traditions are now recognized by UNESCO, promoting preservation of Ladakh's unique Buddhist festivals, traditional arts, and living heritage practices.",
    year: 2022,
    icon: "award" as const,
    link: "https://ich.unesco.org",
  },
  {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    title: "Adventure Capital of India",
    description: "National Geographic ranked Ladakh as the top adventure destination in India, highlighting its world-class trekking routes, white-water rafting, high-altitude cycling, and mountaineering opportunities.",
    year: 2021,
    icon: "medal" as const,
    link: "https://www.nationalgeographic.com",
  },
  {
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&h=600&fit=crop",
    title: "Best Mountain Destination",
    description: "Awarded at the India Tourism Awards, Ladakh's unique landscape combining high-altitude deserts, pristine lakes, and welcoming hospitality earned it the prestigious title of Best Mountain Destination.",
    year: "2020",
    icon: "award" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
    title: "World's Best High-Altitude Desert",
    description: "Recognized by international travel magazines for its unique cold desert ecosystem, rare wildlife, and stunning landscapes that offer visitors an otherworldly experience unlike anywhere else on Earth.",
    year: 2019,
    icon: "medal" as const,
  },
];

const AwardsRecognition = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-dairycream/30 font-montserrat">
      <Helmet>
        <title>Awards & Recognition - Ladakh Tourism</title>
        <meta name="description" content="Discover the prestigious awards and international recognition that Ladakh has received for its stunning landscapes, sustainable tourism, and cultural heritage." />
      </Helmet>
      
      <header 
        className="relative h-[60vh] text-white shadow-2xl overflow-hidden flex items-center justify-center text-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
          poster="https://images.unsplash.com/photo-1595624248734-3f19a4a3e2e2?w=1600&h=900&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/2099395/2099395-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-jetblack/60" />
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-5xl lg:text-7xl font-bold font-tinos mb-6 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Awards & Recognition
          </h1>
          <p className="text-xl lg:text-2xl mx-auto max-w-4xl font-montserrat leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            Ladakh shines on the global stage, earning prestigious accolades for its breathtaking landscapes, 
            sustainable tourism initiatives, thrilling adventures, and rich cultural heritage. 
            Here are some of the honors that make us proud!
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-crimson font-tinos mb-4">
            Our Distinguished Achievements
          </h2>
          <p className="text-lg text-jetblack max-w-3xl mx-auto leading-relaxed">
            From international travel awards to UNESCO recognition, Ladakh continues to be celebrated for its commitment to excellence and sustainability.
          </p>
        </div>
        
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
