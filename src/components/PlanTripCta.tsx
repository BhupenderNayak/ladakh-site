
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const PlanTripCta = () => {
  return (
    <section className="bg-saffron text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-tinos mb-4 text-jetblack">Ready for an Adventure?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-jetblack/80">
          Your unforgettable journey to the Land of High Passes starts here. Get all the information you need to plan your trip.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild size="lg" className="bg-crimson hover:bg-crimson/90 text-white font-semibold text-lg animate-button-pulse">
            <Link to="/plan">Plan Your Journey</Link>
          </Button>
          <a href="https://www.lahdclehpermit.in/register-as-domestic" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-jetblack text-jetblack hover:bg-jetblack hover:text-white font-semibold text-lg">
              Apply for Permit
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlanTripCta;
