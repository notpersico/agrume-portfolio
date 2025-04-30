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
    <section 
      className="py-xl text-center relative overflow-hidden min-h-[60vh] flex items-center justify-center bg-cover bg-center" 
      id="hero"
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2329&q=80')"}}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-black/20 z-0" aria-hidden="true"></div>
      <div className="hero__art"></div>
      <div className="container relative z-10 flex flex-col items-center gap-lg py-lg">
        <h1 className="text-2xl mb-md mx-auto text-white shadow-lg animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 transform translate-y-5">
          I nostri case study
        </h1>
        <p className="text-base max-w-[700px] mx-auto mb-lg text-white shadow-lg animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0 transform translate-y-5">
          Scopri i progetti realizzati da Agrume e come abbiamo aiutato i nostri clienti a raggiungere i loro obiettivi di business attraverso strategie digitali innovative.
        </p>
        <a 
          href="#portfolio" 
          className="mt-md text-lg px-10 py-4 bg-primary text-white rounded-full shadow-lg border-[1.5px] border-primary-dark transition-all hover:bg-primary-dark hover:transform hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4"
        >
          Scopri il portfolio
        </a>
      </div>
    </section>
  );
};