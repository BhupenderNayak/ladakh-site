
import React from 'react';
import { Button } from '@/components/ui/button';
import { DrawerTrigger } from '@/components/ui/drawer';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileBottomBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-crimson h-20 p-4 flex items-center justify-between z-[60] shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <Button asChild className="bg-white text-crimson hover:bg-white/90 font-semibold px-6 text-base h-12">
        <Link to="/plan">Plan Your Journey</Link>
      </Button>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu" className="h-12 w-12 text-white hover:bg-white/10 focus-visible:ring-saffron">
          <Menu size={28} />
        </Button>
      </DrawerTrigger>
    </div>
  );
};

export default MobileBottomBar;
