
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop"
          alt="Panoramic view of a Ladakhi valley with mountains"
          className="w-full h-full object-cover object-center animate-ken-burns"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-white drop-shadow-lg" style={{ color: '#FEF9E8' }}>
          Discover Ladakh
        </h1>
        <p className="font-tinos text-xl md:text-2xl mt-4 text-white/90 drop-shadow-md">
          Roof of the World Awaits
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-crimson hover:bg-crimson/90 text-white font-semibold text-lg">
            <Link to="/plan">Plan Your Journey</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-saffron text-saffron hover:bg-saffron hover:text-white font-semibold text-lg">
            Watch 3D Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
