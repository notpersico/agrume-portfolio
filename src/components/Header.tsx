import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import '../styles/header.css';

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
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">Agrume</a>
          <button 
            className="theme-toggle" 
            aria-label={isDarkMode ? "Passa alla modalità chiara" : "Passa alla modalità scura"}
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <Sun className="theme-toggle-icon" />
            ) : (
              <Moon className="theme-toggle-icon" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};