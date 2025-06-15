
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Helmet } from 'react-helmet';

interface CulturePageLayoutProps {
  pageTitle: string;
  heroImage: string;
  introBlurb: React.ReactNode;
  children: React.ReactNode;
}

const cultureNavItems = [
  { name: 'Historical Monuments', href: '/culture/monuments' },
  { name: 'Art & Craft', href: '/culture/art-craft' },
  { name: 'Local Cuisine', href: '/culture/cuisine' },
];

const CulturePageLayout: React.FC<CulturePageLayoutProps> = ({ pageTitle, heroImage, introBlurb, children }) => {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle} - Culture & Heritage - Ladakh</title>
        <meta name="description" content={`Explore ${pageTitle} in Ladakh. Discover the rich culture and heritage of the region.`} />
      </Helmet>
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative h-64 md:h-80 w-full">
          <img src={heroImage} alt={`${pageTitle} hero banner`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-saffron/30" />
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <h1 className="text-5xl font-bold font-montserrat drop-shadow-md" style={{ color: '#760504' }}>{pageTitle}</h1>
          </div>
        </section>

        <div className="container mx-auto px-4">
           <div className="py-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <span className="text-muted-foreground">Culture & Heritage</span>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <section className="bg-dairycream p-8 rounded-lg mb-8 text-center">
            <p className="text-lg text-jetblack font-tinos leading-relaxed max-w-4xl mx-auto">{introBlurb}</p>
          </section>

          <nav className="sticky top-20 bg-white/80 backdrop-blur-sm z-20 py-2 mb-8 rounded-lg shadow-sm border border-gray-200">
            <ul className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
              {cultureNavItems.map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      location.pathname === item.href 
                        ? 'bg-saffron text-crimson' 
                        : 'text-jetblack hover:bg-gray-100'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="pb-16">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CulturePageLayout;
