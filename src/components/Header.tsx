import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const shouldUseDarkMode = savedTheme === 'dark' || (savedTheme === null && prefersDarkMode);
    
    if (shouldUseDarkMode) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className={`bg-surface-light dark:bg-surface-dark sticky top-0 z-50 py-sm transition-all duration-mid backdrop-blur-md border-b border-glare-light dark:border-glare-dark ${scrolled ? 'py-xs shadow-md border-b-0' : ''}`}>
      <div className="container">
        <div className="flex justify-between items-center py-2 relative">
          <a href="/" className="text-[clamp(1.6rem,5vw,2rem)] font-bold text-primary font-serif z-[101] transition-all duration-fast flex items-center gap-2 p-2 rounded-md hover:scale-105 hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">
            Agrume
          </a>
          <button 
            className="w-11 h-11 rounded-full flex items-center justify-center bg-light-gray-light dark:bg-light-gray-dark text-content-light dark:text-content-dark transition-all duration-fast hover:bg-gray-custom hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
            aria-label={isDarkMode ? "Passa alla modalità chiara" : "Passa alla modalità scura"}
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 transition-transform duration-mid" />
            ) : (
              <Moon className="w-5 h-5 transition-transform duration-mid" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};