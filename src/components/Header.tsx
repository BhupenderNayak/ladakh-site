
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Phone, QrCode, Menu, X, Volume2, Eye, Sun, Moon, Contrast, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AccessibilityControls from './AccessibilityControls';
import LanguageSwitcher from './LanguageSwitcher';
import NavigationMenu from './NavigationMenu';
import SocialLinks from './SocialLinks';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const skipLinkRef = useRef<HTMLAnchorElement>(null);

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
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
    <header className="bg-white shadow-lg relative z-50 font-montserrat">
      {/* Skip to main content link for screen readers */}
      <a
        ref={skipLinkRef}
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-crimson text-white px-4 py-2 z-50 font-medium"
        tabIndex={0}
      >
        Skip to main content
      </a>

      {/* Top Utility Bar */}
      <div className="bg-jetblack text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 text-sm">
            {/* Left Section: Language & Accessibility */}
            <div className="flex flex-wrap items-center gap-4">
              <LanguageSwitcher />
              <AccessibilityControls />
            </div>

            {/* Right Section: Helpline & Social */}
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

      {/* Primary Branding Section */}
      <div className="bg-dairycream border-b-2 border-crimson">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Logo and Branding */}
            <div className="flex items-center gap-4">
              {/* Responsive logo: shrinks on mobile, stays crisp on desktop */}
              <img
                src="/logo-ladakh.svg"
                alt="Government of Ladakh Emblem"
                className="h-12 w-12 sm:h-16 sm:w-16 object-contain transition-all duration-200"
                style={{ minWidth: 48, minHeight: 48 }}
              />
              <div className="text-center lg:text-left">
                <h1 className="text-2xl lg:text-3xl font-bold text-crimson font-tinos">
                  Discover Ladakh
                </h1>
                <p className="text-jetblack text-sm font-medium">
                  Official Tourism Portal | Government of Ladakh
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="w-full lg:w-auto lg:min-w-[300px]">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Search destinations, permits, guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-12 border-2 border-crimson focus:ring-crimson focus:border-crimson"
                  aria-label="Search tourism information"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1 bg-crimson hover:bg-crimson/90 text-white"
                  aria-label="Submit search"
                >
                  <Search size={16} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 py-4">
              <NavigationMenu 
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                className="bg-crimson hover:bg-crimson/90 text-white font-semibold px-6 py-2"
                aria-label="Plan your journey to Ladakh"
              >
                Plan Your Journey
              </Button>
              <Button 
                variant="outline" 
                className="border-saffron text-saffron hover:bg-saffron hover:text-white font-semibold px-6 py-2"
                aria-label="Apply for travel permit"
              >
                Apply for Permit
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2 py-4">
              <Button 
                size="sm"
                className="bg-crimson hover:bg-crimson/90 text-white"
              >
                Plan Journey
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t py-4">
              <div className="space-y-4">
                <NavigationMenu 
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                  isMobile={true}
                />
                <div className="pt-4 border-t flex flex-col gap-3">
                  <Button className="bg-crimson hover:bg-crimson/90 text-white w-full">
                    Plan Your Journey
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-saffron text-saffron hover:bg-saffron hover:text-white w-full"
                  >
                    Apply for Permit
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
