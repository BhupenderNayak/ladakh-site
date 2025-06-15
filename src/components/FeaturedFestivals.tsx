
import React from 'react';
import { Button } from './ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredFestivals = [
  {
    name: 'Hemis Tsechu',
    date: 'June - July',
    description: 'One of the biggest and most famous monastic festivals, celebrating the birth of Guru Padmasambhava.',
    image: '/lovable-uploads/2a309577-df82-4e9c-b94f-53e246a3cd4c.png',
    link: '/festivals/hemis-festival'
  },
  {
    name: 'Losar Festival',
    date: 'December - January',
    description: 'The Ladakhi New Year, marked by vibrant ceremonies, traditional music, and dance performances.',
    image: '/lovable-uploads/63c5c3b8-f619-429a-bc4e-f1a528a4d49b.png',
    link: '/festivals/losar-festival'
  }
];

const FeaturedFestivals = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-crimson font-tinos">Festivals & Events</h2>
          <p className="text-lg text-jetblack mt-2 max-w-3xl mx-auto">
            Immerse yourself in the vibrant culture of Ladakh through its colorful festivals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredFestivals.map((festival) => (
            <div key={festival.name} className="bg-dairycream rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row group">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={festival.image} alt={festival.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col justify-center md:w-1/2">
                <h3 className="text-2xl font-bold text-crimson font-tinos">{festival.name}</h3>
                <div className="flex items-center gap-2 my-2 text-jetblack/80">
                  <Calendar size={16} />
                  <span className="font-medium">{festival.date}</span>
                </div>
                <p className="text-jetblack/90 mb-4 text-sm leading-relaxed">{festival.description}</p>
                <Link to={festival.link}>
                  <Button variant="link" className="text-crimson p-0 h-auto hover:text-saffron">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/festivals">
            <Button size="lg" className="bg-crimson hover:bg-crimson/90 text-white font-semibold">
              Explore All Festivals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFestivals;
