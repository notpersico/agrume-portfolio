import React, { useEffect } from 'react';

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
    <section className="py-xl text-center relative overflow-hidden min-h-[60vh] flex items-center justify-center bg-hero bg-cover bg-center perspective-[1200px]" id="hero">
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-black/20 z-0 pointer-events-none transition-opacity duration-mid" aria-hidden="true"></div>
      <div className="absolute inset-0 rotate-parallax transition-transform duration-slow ease-out-expo -z-10 opacity-40"></div>
      <div className="container relative z-10 flex flex-col items-center gap-lg py-lg max-w-[800px]">
        <h1 className="text-700 mb-md max-w-[800px] mx-auto relative translate-y-5 opacity-0 animate-fadeInUp text-white shadow-[0_4px_16px_rgba(0,0,0,0.28),0_1.5px_4px_rgba(0,0,0,0.18)]">
          I nostri case study
        </h1>
        <p className="text-400 max-w-[700px] mx-auto mb-lg relative translate-y-5 opacity-0 animate-fadeInUpDelayed text-white shadow-[0_4px_16px_rgba(0,0,0,0.28),0_1.5px_4px_rgba(0,0,0,0.18)]">
          Scopri i progetti realizzati da Agrume e come abbiamo aiutato i nostri clienti a raggiungere i loro obiettivi di business attraverso strategie digitali innovative.
        </p>
        <a 
          href="#portfolio" 
          className="mt-md text-lg px-10 py-4 bg-primary text-white rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.13)] border-[1.5px] border-primary-dark transition-all duration-fast hover:bg-primary-dark hover:translate-y-[-8px] hover:scale-[1.03] hover:shadow-[0_10px_32px_rgba(0,0,0,0.18)] hover:border-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
        >
          Scopri il portfolio
        </a>
      </div>
    </section>
  );
};