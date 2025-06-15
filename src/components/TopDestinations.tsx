
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: 'Pangong Tso Lake',
    description: "The world's highest saltwater lake, famed for its color-changing waters.",
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=2070&auto=format&fit=crop',
    link: '/explore/destination/pangong-tso'
  },
  {
    name: 'Nubra Valley',
    description: 'Known for its orchards, Bactrian camels, and stunning monasteries.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070&auto=format&fit=crop',
    link: '/explore/destination/nubra-valley'
  },
  {
    name: 'Shanti Stupa',
    description: 'A white-domed Buddhist stupa offering panoramic views of Leh.',
    image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=1932&auto=format&fit=crop',
    link: '/explore/destination/shanti-stupa'
  },
  {
    name: 'Thiksey Monastery',
    description: 'A magnificent monastery complex resembling the Potala Palace in Lhasa.',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop',
    link: '/explore/destination/thiksey-monastery'
  }
];

const DestinationCard = ({ name, description, image, link }: typeof destinations[0]) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={image} alt={name} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-2xl font-bold font-tinos">{name}</h3>
      <p className="text-sm mt-2 mb-4 opacity-90">{description}</p>
      <Link to={link}>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-jetblack">
          Explore <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </div>
);

const TopDestinations = () => {
  return (
    <section className="py-16 bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-crimson font-tinos">Must-Visit Destinations</h2>
          <p className="text-lg text-jetblack mt-2 max-w-3xl mx-auto">
            Discover the iconic landmarks that make Ladakh a traveler's paradise.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <DestinationCard key={dest.name} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
