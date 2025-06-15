
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const PlanYourTrip = () => {
    return (
        <div className="flex flex-col min-h-screen bg-dairycream">
            <Header />
            <main id="main-content" className="flex-grow">
                <div className="container mx-auto px-4 py-12 flex items-center justify-center text-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-crimson font-tinos">Plan Your Trip</h1>
                        <p className="mt-4 text-xl text-jetblack max-w-3xl mx-auto">
                            Information about planning your trip is coming soon.
                            For now, please check out our <Link to="/contact/faq" className="text-crimson underline hover:text-saffron">FAQ page</Link> for common questions.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PlanYourTrip;
