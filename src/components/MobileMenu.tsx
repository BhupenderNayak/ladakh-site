
import React from 'react';
import { DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import LanguageSwitcher from './LanguageSwitcher';
import AccessibilityControls from './AccessibilityControls';
import SocialLinks from './SocialLinks';
import NavigationMenu from './NavigationMenu';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  setActiveDropdown: (dropdown: string | null) => void;
  activeDropdown: string | null;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ activeDropdown, setActiveDropdown, onClose }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).tagName === 'A') {
      onClose();
    }
  };

  const handleSkipToContent = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
    onClose();
  }

  return (
    <DrawerContent className="bg-dairycream text-jetblack font-montserrat lg:hidden h-[95vh] z-[70]">
      <div className="p-4 overflow-y-auto">
        <DrawerHeader className="text-left p-0 mb-4">
          <DrawerTitle className="text-3xl font-bold text-crimson font-tinos">Menu</DrawerTitle>
        </DrawerHeader>
        
        <div className="space-y-6 text-base" onClick={handleLinkClick}>
          <Button asChild className="w-full bg-crimson hover:bg-crimson/90 text-white font-semibold text-base h-12">
            <Link to="/plan">Plan Your Journey</Link>
          </Button>

          {/* Main Navigation */}
          <NavigationMenu activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} isMobile={true} />

          {/* Utility Links */}
          <div className="space-y-4 pt-6 border-t border-gray-300">
            <h3 className="font-semibold text-lg text-crimson/80 font-tinos">Settings & Links</h3>
            
            <div className="p-2 rounded-lg bg-white/50">
              <AccessibilityControls variant="light" />
            </div>
            
            <div className="p-2 rounded-lg bg-white/50 flex justify-start">
              <LanguageSwitcher variant="light" />
            </div>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-white/50">
              <Phone size={16} className="text-crimson"/>
              <span className="text-jetblack text-sm">Tourism Helpline:</span>
              <a href="tel:+91-1982-252094" className="font-semibold text-crimson hover:underline text-sm">
                +91-1982-252094
              </a>
            </div>

            <div className="p-2 rounded-lg bg-white/50">
              <SocialLinks variant="light" />
            </div>

            <Button className="w-full bg-crimson text-white font-medium" onClick={handleSkipToContent}>
               Skip to main content
            </Button>
          </div>
        </div>
      </div>
    </DrawerContent>
  );
};

export default MobileMenu;
