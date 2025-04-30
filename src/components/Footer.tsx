import React from 'react';
import { Facebook, Instagram, Linkedin, Dribbble } from 'lucide-react';
import '../styles/footer.css';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Agrume</h3>
            <p>Agenzia creativa specializzata in visual identity, content creation, sviluppo web, ads e strategie multi-piattaforma. Trasformiamo brand con soluzioni creative su misura.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Dribbble">
                <Dribbble size={18} />
              </a>
            </div>
          </div>
          <div className="footer-nav">
            <h4>Servizi</h4>
            <ul>
              <li><a href="#">Full Strategy</a></li>
              <li><a href="#">Brand Identity</a></li>
              <li><a href="#">Sviluppo Web</a></li>
              <li><a href="#">Identità Visiva</a></li>
              <li><a href="#">SMMA</a></li>
              <li><a href="#">Consulenze</a></li>
            </ul>
          </div>
          <div className="footer-nav">
            <h4>Info</h4>
            <ul>
              <li><a href="#">Chi Siamo</a></li>
              <li><a href="#">Contatti</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Lavora con noi</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Agrume. Tutti i diritti riservati.</p>
          <p>Designed with <span className="heart" aria-hidden="true">♥</span> by Agrume</p>
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
      className={`back-to-top ${visible ? 'visible' : ''}`} 
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