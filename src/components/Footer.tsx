import React from 'react';
import { Facebook, Instagram, Linkedin, Dribbble } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content-light dark:bg-[#0a0c0d] text-white py-xl pb-lg">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          <div className="lg:col-span-2">
            <h3 className="text-xl mb-md text-white">Agrume</h3>
            <p className="text-light-gray-light dark:text-light-gray-dark mb-lg">Agenzia creativa specializzata in visual identity, content creation, sviluppo web, ads e strategie multi-piattaforma. Trasformiamo brand con soluzioni creative su misura.</p>
            <div className="flex gap-sm">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-fast hover:bg-primary hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-fast hover:bg-primary hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-fast hover:bg-primary hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-fast hover:bg-primary hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2" aria-label="Dribbble">
                <Dribbble size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg mb-md text-white">Servizi</h4>
            <ul>
              <li className="mb-3">
                <a href="#" className="text-light-gray-light dark:text-light-gray-dark inline-block transition-all duration-fast hover:text-primary hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:text-primary">Full Strategy</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light-gray-light dark:text-light-gray-dark inline-block transition-all duration-fast hover:text-primary hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:text-primary">Brand Identity</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light-gray-light dark:text-light-gray-dark inline-block transition-all duration-fast hover:text-primary hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:text-primary">Sviluppo Web</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light-gray-light dark:text-light-gray-dark inline-block transition-all duration-fast hover:text-primary hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:text-primary">Identità Visiva</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light-gray-light dark:text-light-gray-dark inline-block transition-all duration-fast hover:text-primary hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:text-primary">SMMA</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light-gray-light dark:text-light-gray-dark inline-block transition-all duration-fast hover:text-primary hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:text-primary">Consulenze</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-md text-white">Info</h4>
            <ul>
              <li className="mb-3">
                <a href="#" className="text-light-gray-light dark:text-light-gray-dark inline-block transition-all duration-fast hover:text-primary hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:text-primary">Chi Siamo</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light-gray-light dark:text-light-gray-dark inline-block transition-all duration-fast hover:text-primary hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:text-primary">Contatti</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light-gray-light dark:text-light-gray-dark inline-block transition-all duration-fast hover:text-primary hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:text-primary">Portfolio</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light-gray-light dark:text-light-gray-dark inline-block transition-all duration-fast hover:text-primary hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:text-primary">Lavora con noi</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light-gray-light dark:text-light-gray-dark inline-block transition-all duration-fast hover:text-primary hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:text-primary">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-lg pt-md border-t border-white/10 flex flex-col md:flex-row md:justify-between md:items-center gap-sm text-light-gray-light dark:text-light-gray-dark text-xs sm:text-sm">
          <p>&copy; 2025 Agrume. Tutti i diritti riservati.</p>
          <p>Designed with <span className="text-primary inline-block mx-1 animate-heartBeat" aria-hidden="true">♥</span> by Agrume</p>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
};

const BackToTop: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);
  
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <a 
      href="#" 
      className={`fixed bottom-md right-md w-[50px] h-[50px] bg-primary text-white rounded-full flex items-center justify-center opacity-0 translate-y-5 transition-all duration-mid z-50 shadow-md hover:bg-primary-dark hover:-translate-y-1 ${visible ? 'opacity-100 translate-y-0' : ''}`}
      onClick={scrollToTop}
      aria-label="Torna all'inizio"
      aria-hidden={!visible}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
};