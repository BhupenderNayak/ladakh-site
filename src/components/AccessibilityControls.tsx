
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Minus, Eye, Sun, Moon, Contrast, Volume2 } from 'lucide-react';

const AccessibilityControls = () => {
  const [fontSize, setFontSize] = useState(16);
  const [contrastMode, setContrastMode] = useState('standard');
  const [isReaderActive, setIsReaderActive] = useState(false);

  useEffect(() => {
    // Apply font size to root element
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    // Apply contrast mode classes
    const body = document.body;
    body.classList.remove('high-contrast', 'dark-mode');
    
    if (contrastMode === 'high-contrast') {
      body.classList.add('high-contrast');
    } else if (contrastMode === 'dark') {
      body.classList.add('dark-mode');
    }
  }, [contrastMode]);

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(prev => prev + 2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(prev => prev - 2);
    }
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  const toggleContrast = () => {
    const modes = ['standard', 'high-contrast', 'dark'];
    const currentIndex = modes.indexOf(contrastMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setContrastMode(modes[nextIndex]);
  };

  const toggleScreenReader = () => {
    setIsReaderActive(!isReaderActive);
    if (!isReaderActive) {
      // Simulate screen reader activation
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Screen reader mode activated. Navigate using tab and arrow keys.';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 3000);
    }
  };

  return (
    <div className="flex items-center gap-2" role="toolbar" aria-label="Accessibility controls">
      {/* Font Size Controls */}
      <div className="flex items-center gap-1 border-r border-gray-600 pr-2">
        <span className="text-xs mr-1">Text:</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={decreaseFontSize}
          disabled={fontSize <= 12}
          className="h-6 w-6 p-0 text-white hover:text-saffron hover:bg-white/10"
          aria-label="Decrease text size"
          title="Decrease text size"
        >
          <span className="text-xs font-bold">A-</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetFontSize}
          className="h-6 w-6 p-0 text-white hover:text-saffron hover:bg-white/10"
          aria-label="Reset text size"
          title="Reset text size to default"
        >
          <span className="text-xs font-bold">A</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={increaseFontSize}
          disabled={fontSize >= 24}
          className="h-6 w-6 p-0 text-white hover:text-saffron hover:bg-white/10"
          aria-label="Increase text size"
          title="Increase text size"
        >
          <span className="text-xs font-bold">A+</span>
        </Button>
      </div>

      {/* Contrast Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleContrast}
        className="h-6 px-2 text-white hover:text-saffron hover:bg-white/10"
        aria-label={`Current contrast: ${contrastMode}. Click to change contrast mode`}
        title="Toggle contrast mode"
      >
        {contrastMode === 'standard' && <Eye size={14} />}
        {contrastMode === 'high-contrast' && <Contrast size={14} />}
        {contrastMode === 'dark' && <Moon size={14} />}
      </Button>

      {/* Screen Reader Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleScreenReader}
        className={`h-6 px-2 text-white hover:text-saffron hover:bg-white/10 ${
          isReaderActive ? 'bg-saffron text-jetblack' : ''
        }`}
        aria-label={`Screen reader ${isReaderActive ? 'active' : 'inactive'}. Click to toggle`}
        title="Toggle screen reader assistance"
        aria-pressed={isReaderActive}
      >
        <Volume2 size={14} />
      </Button>
    </div>
  );
};

export default AccessibilityControls;
