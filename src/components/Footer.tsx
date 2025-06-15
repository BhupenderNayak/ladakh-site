
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jetblack text-dairycream font-montserrat">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="col-span-1">
             <div className="flex items-center gap-4 mb-4">
                <img src="/lovable-uploads/474c0a91-453c-40b6-9716-5153020354d2.png" alt="Tourism of Ladakh Logo" className="h-12 bg-white/20 p-1 rounded" />
                <div>
                  <h3 className="text-xl font-bold text-white font-tinos">Discover Ladakh</h3>
                  <p className="text-xs text-dairycream/80">Official Tourism Portal</p>
                </div>
              </div>
            <p className="text-sm text-dairycream/70">
              Experience the land of high passes, ancient monasteries, and breathtaking landscapes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white font-tinos">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-saffron transition-colors">Home</Link></li>
              <li><Link to="/festivals" className="hover:text-saffron transition-colors">Festivals & Events</Link></li>
              <li><Link to="/updates/weather" className="hover:text-saffron transition-colors">Live Updates</Link></li>
              <li><Link to="/contact/faq" className="hover:text-saffron transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white font-tinos">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-saffron"/>
                <span>Tourism Helpline</span>
              </div>
              <a href="tel:+91-1982-252094" className="font-semibold hover:text-saffron transition-colors">
                +91-1982-252094
              </a>
              <p className="text-dairycream/70">Department of Tourism, UT Ladakh</p>
            </div>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white font-tinos">Follow Us</h4>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dairycream/20 text-center text-sm text-dairycream/60">
          <p>&copy; {new Date().getFullYear()} Department of Tourism, Administration of UT Ladakh. All Rights Reserved.</p>
           <p className="mt-2">Designed to showcase the beauty of Ladakh.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
