
import React from "react";
import { Star } from "lucide-react";

const JourneyContinues = () => {
  return (
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
  );
};

export default JourneyContinues;
