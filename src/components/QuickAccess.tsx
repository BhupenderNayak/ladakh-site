
import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, AlertTriangle, Calendar, FileText, Map, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickAccessItems = [
  {
    title: 'Live Weather & Roads',
    icon: MapPin,
    link: '/updates/weather',
    description: 'Real-time status updates',
  },
  {
    title: 'Travel Advisories',
    icon: AlertTriangle,
    link: '/updates/advisories',
    description: 'Latest health & safety info',
  },
  {
    title: 'Festivals Calendar',
    icon: Calendar,
    link: '/festivals',
    description: 'Plan around cultural events',
  },
  {
    title: 'Apply for Permits',
    icon: FileText,
    link: 'https://www.lahdclehpermit.in/register-as-domestic',
    external: true,
    description: 'Get your travel permits online',
  },
  {
    title: 'Interactive Map',
    icon: Map,
    link: '/map',
    description: 'Explore destinations visually',
  },
  {
    title: 'Feedback',
    icon: MessageSquare,
    link: '/contact/feedback',
    description: 'Share your suggestions',
  },
];

const QuickAccessCard = ({ item }: { item: typeof quickAccessItems[0] }) => {
  const Icon = item.icon;
  const content = (
    <Card className="w-64 shrink-0 border-2 border-jetblack bg-dairycream/50 hover:bg-saffron/20 hover:shadow-lg transition-all duration-300 group snap-start">
      <div className="p-6 flex flex-col items-center text-center">
        <Icon className="h-10 w-10 text-crimson mb-3 transition-transform group-hover:scale-110" strokeWidth={1.5} />
        <h3 className="font-montserrat font-semibold text-lg text-jetblack">{item.title}</h3>
        <p className="text-sm text-jetblack/70 mt-1">{item.description}</p>
      </div>
    </Card>
  );

  if (item.external) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="focus:outline-none focus:ring-2 focus:ring-saffron rounded-lg">
        {content}
      </a>
    );
  }

  return (
    <Link to={item.link} className="focus:outline-none focus:ring-2 focus:ring-saffron rounded-lg">
      {content}
    </Link>
  );
};

const QuickAccess = () => {
  return (
    <section className="py-12 bg-dairycream">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto space-x-6 py-4 snap-x snap-mandatory">
          {quickAccessItems.map((item) => (
            <QuickAccessCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
