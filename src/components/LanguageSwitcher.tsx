
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bo', name: 'Tibetan', nativeName: 'བཀྲ་ཤིས' }
];

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'dark' }) => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setIsOpen(false);
    
    // Announce language change for screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Language changed to ${language.name}`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 2000);

    console.log(`Language changed to: ${language.name}`);
  };

  return (
    <div className="relative" role="combobox" aria-expanded={isOpen} aria-label="Language selector">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "gap-1 h-auto py-1 px-2 items-center",
          variant === 'dark'
            ? "text-white hover:text-saffron hover:bg-white/10"
            : "text-jetblack hover:text-crimson hover:bg-black/5"
        )}
        aria-haspopup="listbox"
        aria-controls="language-menu"
      >
        <span className="font-medium">{currentLanguage.nativeName}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <>
          {/* Overlay for mobile */}
          <div 
            className="fixed inset-0 z-40 lg:hidden" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown Menu */}
          <div 
            id="language-menu"
            className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[140px]"
            role="listbox"
            aria-label="Available languages"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                  currentLanguage.code === language.code 
                    ? 'bg-saffron/10 text-crimson font-medium' 
                    : 'text-jetblack'
                }`}
                role="option"
                aria-selected={currentLanguage.code === language.code}
              >
                <div>
                  <div className="font-medium">{language.nativeName}</div>
                  <div className="text-xs text-gray-600">{language.name}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
