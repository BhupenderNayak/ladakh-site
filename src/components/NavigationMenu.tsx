import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationMenuProps {
  activeDropdown: string | null;
  setActiveDropdown: (dropdown: string | null) => void;
  isMobile?: boolean;
}

const navigationItems = [
  {
    name: 'Home',
    href: '/',
    hasDropdown: false
  },
  {
    name: 'Explore',
    href: '/explore',
    hasDropdown: true,
    dropdown: [
      {
        category: 'Interactive Map',
        items: [
          { name: 'Virtual Tour Map', href: '/explore/map' },
          { name: 'GPS Coordinates', href: '/explore/gps' }
        ]
      },
      {
        category: 'Destinations',
        items: [
          { name: 'Monasteries', href: '/explore/monasteries' },
          { name: 'Adventure Spots', href: '/explore/adventure' },
          { name: 'Trekking Routes', href: '/explore/trekking' }
        ]
      },
      {
        category: 'Top Itineraries',
        items: [
          { name: '3-Day Cultural Tour', href: '/explore/itineraries/3-day' },
          { name: '7-Day Adventure Package', href: '/explore/itineraries/7-day' },
          { name: 'Monastery Circuit', href: '/explore/itineraries/monastery' }
        ]
      }
    ]
  },
  {
    name: 'Plan Your Trip',
    href: '/plan',
    hasDropdown: true,
    dropdown: [
      {
        category: 'Apply for Permit',
        items: [
          { name: 'Inner-Line Permit', href: '/plan/permits/inner-line' },
          { name: 'Adventure Permit', href: '/plan/permits/adventure' },
          { name: 'Cultural Permit', href: '/plan/permits/cultural' }
        ]
      },
      {
        category: 'Accommodations',
        items: [
          { name: 'Hotels & Guesthouses', href: '/plan/accommodation/hotels' },
          { name: 'Homestays', href: '/plan/accommodation/homestays' },
          { name: 'Camping Sites', href: '/plan/accommodation/camping' }
        ]
      },
      {
        category: 'Transport & Logistics',
        items: [
          { name: 'Flight Bookings', href: '/plan/transport/flights' },
          { name: 'Local Transport', href: '/plan/transport/local' },
          { name: 'Car Rentals', href: '/plan/transport/rentals' }
        ]
      }
    ]
  },
  {
    name: 'Culture & Heritage',
    href: '/culture',
    hasDropdown: true,
    dropdown: [
      {
        category: 'Heritage',
        items: [
          { name: 'History & Monuments', href: '/culture/history' },
          { name: 'Art & Handicrafts', href: '/culture/art' },
          { name: 'Local Cuisine', href: '/culture/cuisine' }
        ]
      }
    ]
  },
  {
    name: 'Festivals & Events',
    href: '/festivals',
    hasDropdown: false
  },
  {
    name: 'Live Updates',
    href: '/updates',
    hasDropdown: true,
    dropdown: [
      {
        category: 'Current Status',
        items: [
          { name: 'Weather & Road Status', href: '/updates/weather' },
          { name: 'Travel Alerts & Health Advisories', href: '/updates/alerts' }
        ]
      }
    ]
  },
  {
    name: 'Awards & Recognition',
    href: '/awards', // <-- Set to the awards page
    hasDropdown: false
  },
  {
    name: 'Contact & Feedback',
    href: '/contact',
    hasDropdown: true,
    dropdown: [
      {
        category: 'Get Help',
        items: [
          { name: 'Feedback Portal', href: '/contact/feedback' },
          { name: 'FAQs / Help', href: '/contact/help' }
        ]
      }
    ]
  }
];

const NavigationMenu: React.FC<NavigationMenuProps> = ({ 
  activeDropdown, 
  setActiveDropdown, 
  isMobile = false 
}) => {
  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleKeyDown = (e: React.KeyboardEvent, itemName: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDropdownToggle(itemName);
    }
  };

  if (isMobile) {
    return (
      <div className="space-y-2">
        {navigationItems.map((item) => (
          <div key={item.name}>
            {item.hasDropdown ? (
              <div>
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  onKeyDown={(e) => handleKeyDown(e, item.name)}
                  className="flex items-center justify-between w-full px-4 py-2 text-left text-jetblack hover:text-crimson hover:bg-gray-50 transition-colors rounded-md"
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {activeDropdown === item.name && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.dropdown?.map((category) => (
                      <div key={category.category}>
                        <div className="text-sm font-semibold text-crimson mb-1">
                          {category.category}
                        </div>
                        <div className="space-y-1">
                          {category.items.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-1 text-sm text-gray-700 hover:text-crimson hover:bg-gray-50 rounded"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                className="block px-4 py-2 text-jetblack hover:text-crimson hover:bg-gray-50 transition-colors rounded-md font-medium"
              >
                {item.name}
              </a>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {navigationItems.map((item) => (
        <div key={item.name} className="relative group">
          {item.hasDropdown ? (
            <button
              onClick={() => handleDropdownToggle(item.name)}
              onKeyDown={(e) => handleKeyDown(e, item.name)}
              className="flex items-center gap-1 px-3 py-2 text-jetblack hover:text-crimson transition-colors font-medium"
              aria-expanded={activeDropdown === item.name}
              aria-haspopup="true"
            >
              {item.name}
              <ChevronDown 
                size={16} 
                className={`transition-transform ${
                  activeDropdown === item.name ? 'rotate-180' : ''
                }`} 
              />
            </button>
          ) : (
            <a
              href={item.href}
              className="px-3 py-2 text-jetblack hover:text-crimson transition-colors font-medium"
            >
              {item.name}
            </a>
          )}

          {/* Desktop Dropdown */}
          {item.hasDropdown && activeDropdown === item.name && (
            <>
              {/* Overlay */}
              <div 
                className="fixed inset-0 z-30" 
                onClick={() => setActiveDropdown(null)}
                aria-hidden="true"
              />
              
              {/* Dropdown Content */}
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-40 min-w-[280px] max-w-[400px]">
                <div className="p-4 grid gap-4">
                  {item.dropdown?.map((category) => (
                    <div key={category.category}>
                      <h3 className="text-sm font-semibold text-crimson mb-2 border-b border-gray-100 pb-1">
                        {category.category}
                      </h3>
                      <div className="space-y-1">
                        {category.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-2 py-1 text-sm text-gray-700 hover:text-crimson hover:bg-gray-50 rounded transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default NavigationMenu;
