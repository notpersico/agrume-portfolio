import React, { useState, useEffect, useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectDialog } from './ProjectDialog';
import { projectData } from '../data/projectData';
import '../styles/portfolio.css';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectData);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const filterTabsRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const filterRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  // Filter projects based on selected category
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projectData);
    } else {
      setFilteredProjects(projectData.filter(project => project.category === filter));
    }
    
    // Announce to screen readers
    announceFilterResults(
      filter === 'all' 
        ? projectData.length 
        : projectData.filter(project => project.category === filter).length
    );
  }, [filter]);
  
  // Position underline on initial render and window resize
  useEffect(() => {
    const positionUnderline = () => {
      const activeTab = filterTabsRef.current?.querySelector('.active') as HTMLElement;
      if (activeTab && underlineRef.current) {
        const rect = activeTab.getBoundingClientRect();
        const parentRect = filterTabsRef.current?.getBoundingClientRect() || { left: 0 };
        
        underlineRef.current.style.left = `${rect.left - parentRect.left}px`;
        underlineRef.current.style.width = `${rect.width}px`;
      }
    };
    
    positionUnderline();
    window.addEventListener('resize', positionUnderline);
    
    return () => {
      window.removeEventListener('resize', positionUnderline);
    };
  }, []);
  
  // Initialize intersection observer for reveal animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Skip animation for users who prefer reduced motion
    if (prefersReducedMotion) {
      document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('in');
      });
      return;
    }
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
    });
    
    return () => observer.disconnect();
  }, [filteredProjects]);
  
  const handleFilterChange = (category: string, index: number) => {
    setFilter(category);
    
    // Move underline
    if (underlineRef.current && filterRefs.current[index]) {
      const tab = filterRefs.current[index];
      if (!tab) return;
      
      const rect = tab.getBoundingClientRect();
      const parentRect = filterTabsRef.current?.getBoundingClientRect() || { left: 0 };
      
      underlineRef.current.style.left = `${rect.left - parentRect.left}px`;
      underlineRef.current.style.width = `${rect.width}px`;
    }
  };
  
  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    const tabs = filterRefs.current.filter(Boolean);
    let newIndex;
    
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        newIndex = (index + 1) % tabs.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        newIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    
    // Focus and activate the new tab
    tabs[newIndex]?.focus();
    const category = tabs[newIndex]?.getAttribute('data-filter') || 'all';
    handleFilterChange(category, newIndex);
    e.preventDefault();
  };
  
  const handleProjectSelect = (id: string) => {
    setSelectedProject(id);
  };
  
  const handleCloseDialog = () => {
    setSelectedProject(null);
  };
  
  // Announce filter results to screen readers
  const announceFilterResults = (count: number) => {
    let announcer = document.getElementById('a11y-announcer');
    
    if (!announcer) {
      announcer = document.createElement('div');
      announcer.id = 'a11y-announcer';
      announcer.className = 'sr-only';
      announcer.setAttribute('aria-live', 'polite');
      document.body.appendChild(announcer);
    }
    
    announcer.textContent = `${count} progetti trovati.`;
  };
  
  // Filter categories
  const categories = [
    { id: 'all', label: 'Tutti' },
    { id: 'full-strategy', label: 'Full Strategy' },
    { id: 'brand-identity', label: 'Brand Identity' },
    { id: 'sito-web', label: 'Sito Web' },
    { id: 'identita-visiva', label: 'Identità Visiva' },
    { id: 'smma', label: 'SMMA' },
    { id: 'consulenze', label: 'Consulenze' }
  ];
  
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        {/* Filter Tabs */}
        <div 
          className="filter-tabs" 
          role="tablist" 
          aria-label="Filtra progetti per categoria"
          ref={filterTabsRef}
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`filter-tab ${filter === category.id ? 'active' : ''}`}
              role="tab"
              aria-selected={filter === category.id}
              aria-controls={`${category.id}-panel`}
              id={`${category.id}-tab`}
              data-filter={category.id}
              onClick={() => handleFilterChange(category.id, index)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
              ref={el => filterRefs.current[index] = el}
            >
              {category.label}
            </button>
          ))}
          <span className="filter-underline" aria-hidden="true" ref={underlineRef}></span>
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid" id="projects-container">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              onSelect={handleProjectSelect}
            />
          ))}
        </div>
      </div>
      
      {/* Project Dialog/Modal */}
      {selectedProject && (
        <ProjectDialog
          projectId={selectedProject}
          onClose={handleCloseDialog}
        />
      )}
    </section>
  );
};