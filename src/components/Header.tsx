
import React, { useState, useRef, useEffect } from 'react';
import { Search, Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AccessibilityControls from './AccessibilityControls';
import LanguageSwitcher from './LanguageSwitcher';
import NavigationMenu from './NavigationMenu';
import SocialLinks from './SocialLinks';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const skipLinkRef = useRef<HTMLAnchorElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 150) { // Threshold to start effect
        if (currentScrollY > lastScrollY.current) {
          setIsCollapsed(true); // scrolling down
        } else {
          setIsCollapsed(false); // scrolling up
        }
      } else {
        setIsCollapsed(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Implement search functionality
  };

  return (
    <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <header className="bg-white shadow-lg sticky top-0 z-40 font-montserrat">
        <a ref={skipLinkRef} href="#main-content" id="skip-link" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-crimson text-white px-4 py-2 z-50 font-medium" tabIndex={0}>
          Skip to main content
        </a>

        <div className={`transition-all duration-300 ease-in-out overflow-hidden lg:max-h-[500px] ${isCollapsed ? 'lg:max-h-0' : ''}`}>
          {/* Top Utility Bar - DESKTOP ONLY */}
          <div className="bg-jetblack text-white hidden lg:block">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center justify-between py-2 text-sm">
                <div className="flex flex-wrap items-center gap-4">
                  <LanguageSwitcher />
                  <AccessibilityControls />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span className="hidden sm:inline">Tourism Helpline:</span>
                    <a href="tel:+91-1982-252094" className="font-semibold hover:text-saffron transition-colors">
                      +91-1982-252094
                    </a>
                  </div>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Branding Section */}
        <div className="bg-dairycream border-b-2 border-crimson">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="w-full flex items-center justify-between lg:w-auto">
                <img src="/lovable-uploads/75527b66-1600-48fb-ba8b-cb9002e5ccd8.png" alt="Discover Ladakh Logo" className="h-16 lg:h-20 object-contain" />
                <div className="lg:hidden">
                  <DrawerTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Open menu" className="h-12 w-12 text-crimson hover:bg-crimson/10 focus-visible:ring-saffron">
                      <Menu size={28} />
                    </Button>
                  </DrawerTrigger>
                </div>
              </div>


              {/* Search Bar */}
              <div className="w-full lg:w-auto lg:min-w-[300px]">
                <form onSubmit={handleSearch} className="relative">
                  <Input 
                    type="search" 
                    placeholder="Search destinations, permits, guides..." 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                    className="w-full pr-12 border-2 border-crimson focus:ring-crimson focus:border-crimson h-12 text-base" 
                    aria-label="Search tourism information" 
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    aria-label="Submit search" 
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-crimson hover:bg-crimson/90 text-white rounded-lg h-9 w-9"
                  >
                    <Search size={20} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation - DESKTOP ONLY */}
        <nav className="bg-white border-b shadow-sm hidden lg:flex" role="navigation" aria-label="Main navigation">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 py-4">
                <NavigationMenu activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
              </div>
              <div className="flex items-center gap-3">
                <Button className="bg-crimson hover:bg-crimson/90 text-white font-semibold px-6 py-2" aria-label="Plan your journey to Ladakh">
                  Plan Your Journey
                </Button>
                <Button asChild variant="outline" className="border-saffron text-saffron hover:bg-saffron hover:text-white font-semibold px-6 py-2" aria-label="Apply for travel permit">
                  <a href="https://www.lahdclehpermit.in/register-as-domestic" target="_blank" rel="noopener noreferrer">
                    Apply for Permit
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE ONLY NAVIGATION */}
      <MobileMenu activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} onClose={() => setIsMenuOpen(false)} />
    </Drawer>
  );
};

export default Header;
