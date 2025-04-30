import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import './styles/index.css';

function App() {
  useEffect(() => {
    // Set page title
    document.title = "Agrume - Portfolio Case Study";
    
    // Add meta description
    const metaDescription = document.head.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Agrume - Agenzia creativa specializzata in visual identity, content creation, sviluppo web, e strategie digitali innovative.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Agrume - Agenzia creativa specializzata in visual identity, content creation, sviluppo web, e strategie digitali innovative.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;