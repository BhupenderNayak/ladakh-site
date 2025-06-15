
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FESTIVALS_DATA } from '@/data/festivals-data';
import Header from '@/components/Header';
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react';
import NotFound from './NotFound';
import { Helmet } from 'react-helmet';

const FestivalDetailsPage = () => {
  const { festivalId } = useParams<{ festivalId: string }>();
  const festival = FESTIVALS_DATA.find(f => f.id === festivalId);

  if (!festival) {
    return <NotFound />;
  }

  return (
    <div className="bg-offwhite min-h-screen font-montserrat">
      <Helmet>
        <title>{festival.name} - Ladakh Festivals</title>
        <meta name="description" content={festival.description} />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-8 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <Link to="/festivals" className="mb-8 inline-flex items-center text-jetblack hover:text-crimson transition-colors group font-medium">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Festivals
          </Link>

          <article>
            <div className="overflow-hidden rounded-lg shadow-lg mb-8">
              <img 
                src={`${festival.image.split('?')[0]}?w=1200&h=600&fit=crop&auto=format&q=80`}
                alt={`Image of ${festival.name}`}
                className="w-full h-64 md:h-96 object-cover"
                width="1200"
                height="600"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-tinos text-crimson mb-4">{festival.name}</h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-md text-jetblack mb-6 border-y border-dairycream py-4">
              <div className="flex items-center gap-2">
                <Tag className="text-saffron" size={18} />
                <span className="font-semibold">Type:</span>
                <span>{festival.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-saffron" size={18} />
                <span className="font-semibold">Date:</span>
                <span>{festival.dateRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-saffron" size={18} />
                <span className="font-semibold">Location:</span>
                <span>{festival.location}</span>
              </div>
            </div>

            <div className="text-lg text-jetblack/90 font-montserrat leading-relaxed space-y-4">
              <p>{festival.description}</p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default FestivalDetailsPage;
