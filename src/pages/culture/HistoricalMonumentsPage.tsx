
import React, { useState, useRef } from 'react';
import CulturePageLayout from './CulturePageLayout';
import { MONUMENTS_DATA } from '@/data/monuments-data';
import MonumentCard from '@/components/MonumentCard';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

const HistoricalMonumentsPage = () => {
  const eras = ['All', '14th Century', '15th Century', '17th Century'];
  const [selectedEra, setSelectedEra] = useState('All');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => {
    if (videoRef.current) {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
  }
  
  const filteredMonuments = selectedEra === 'All'
    ? MONUMENTS_DATA
    : MONUMENTS_DATA.filter(m => m.era === selectedEra);

  const intro = (
    <>
      Step back in time and witness the architectural marvels that dot the Ladakhi landscape.
      From ancient monasteries perched on high cliffs to historic palaces, each monument tells a story of a rich and resilient heritage.
    </>
  );

  return (
    <CulturePageLayout
      pageTitle="Historical Monuments"
      heroImage="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&h=1080&fit=crop&auto=format&q=80"
      introBlurb={intro}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-tinos text-crimson mb-4 text-center">Explore by Era</h2>
        <div className="flex justify-center gap-2 flex-wrap">
          {eras.map(era => (
            <Button
              key={era}
              variant={selectedEra === era ? 'default' : 'outline'}
              className={selectedEra === era ? 'bg-saffron text-white hover:bg-saffron/90' : ''}
              onClick={() => setSelectedEra(era)}
            >
              {era}
            </Button>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredMonuments.map(monument => (
            <MonumentCard key={monument.id} monument={monument} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-tinos text-crimson mb-4 text-center">Video Spotlight: Leh Palace</h2>
        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg group cursor-pointer" onClick={handleVideoPlay}>
          <video
            ref={videoRef}
            src="https://videos.pexels.com/video-files/3248981/3248981-hd_1920_1080_25fps.mp4"
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            poster="/lovable-uploads/474c0a91-453c-40b6-9716-5153020354d2.png"
          />
          <div 
            className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300"
            style={{ opacity: isPlaying ? 0 : 1 }}
          >
            <div className="bg-white/30 text-white p-4 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform">
              <Play size={48} />
            </div>
          </div>
        </div>
      </section>
    </CulturePageLayout>
  );
};

export default HistoricalMonumentsPage;
