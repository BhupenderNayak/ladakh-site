
import React from 'react';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-12" tabIndex={-1}>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-crimson mb-6 font-tinos">
            Welcome to Ladakh
          </h1>
          <p className="text-xl text-jetblack mb-8 font-montserrat leading-relaxed">
            Discover the Land of High Passes - where ancient Buddhist culture meets 
            breathtaking Himalayan landscapes. Plan your journey to one of India's 
            most spectacular destinations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-dairycream rounded-lg">
              <h2 className="text-2xl font-bold text-crimson mb-4 font-tinos">
                Sacred Monasteries
              </h2>
              <p className="text-jetblack">
                Explore ancient Buddhist monasteries perched on mountain cliffs, 
                home to centuries-old traditions and spiritual wisdom.
              </p>
            </div>
            
            <div className="text-center p-6 bg-dairycream rounded-lg">
              <h2 className="text-2xl font-bold text-crimson mb-4 font-tinos">
                Adventure Awaits
              </h2>
              <p className="text-jetblack">
                From high-altitude trekking to river rafting, experience 
                world-class adventure sports in stunning Himalayan landscapes.
              </p>
            </div>
            
            <div className="text-center p-6 bg-dairycream rounded-lg">
              <h2 className="text-2xl font-bold text-crimson mb-4 font-tinos">
                Rich Culture
              </h2>
              <p className="text-jetblack">
                Immerse yourself in Ladakhi culture through traditional festivals, 
                local cuisine, and authentic handicrafts.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
