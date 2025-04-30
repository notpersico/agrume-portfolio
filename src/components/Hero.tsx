import React, { useEffect } from 'react';
import '../styles/hero.css';

export const Hero: React.FC = () => {
  useEffect(() => {
    // Skip parallax if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientY } = e;
      const parallaxValue = (clientY / window.innerHeight - 0.5) * -6;
      document.documentElement.style.setProperty('--parallax', `${parallaxValue}deg`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__overlay" aria-hidden="true"></div>
      <div className="hero__art"></div>
      <div className="container hero__content">
        <h1>I nostri case study</h1>
        <p>Scopri i progetti realizzati da Agrume e come abbiamo aiutato i nostri clienti a raggiungere i loro obiettivi di business attraverso strategie digitali innovative.</p>
        <a href="#portfolio" className="btn hero__cta">Scopri il portfolio</a>
      </div>
    </section>
  );
};