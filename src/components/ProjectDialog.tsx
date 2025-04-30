import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { projectData } from '../data/projectData';
import '../styles/dialog.css';

interface ProjectDialogProps {
  projectId: string;
  onClose: () => void;
}

export const ProjectDialog: React.FC<ProjectDialogProps> = ({ projectId, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const project = projectData.find(p => p.id === projectId);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    // Open dialog and handle focus trap
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Check if browser supports <dialog> element
    const supportsDialog = typeof HTMLDialogElement === 'function';
    
    if (supportsDialog) {
      dialog.showModal();
    } else {
      // Fallback for browsers without dialog support
      dialog.setAttribute('open', '');
      document.body.style.overflow = 'hidden';
    }
    
    // Focus the close button
    closeButtonRef.current?.focus();
    
    // Handle closing on escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (!supportsDialog) {
        document.body.style.overflow = '';
      }
    };
  }, [onClose]);
  
  // Trap focus within modal
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    
    const focusableElements = dialog.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };
    
    dialog.addEventListener('keydown', trapFocus);
    
    return () => {
      dialog.removeEventListener('keydown', trapFocus);
    };
  }, []);
  
  // Handle background click to close
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };
  
  if (!project) return null;
  
  return (
    <dialog 
      id={`${project.id}-modal`} 
      className="project-dialog surface"
      ref={dialogRef}
      onClick={handleDialogClick}
      role="dialog" 
      aria-modal="true" 
      aria-labelledby={`${project.id}-modal-title`} 
      aria-describedby={`${project.id}-modal-desc`}
    >
      <form method="dialog">
        <button 
          className="dialog-close" 
          aria-label="Chiudi"
          onClick={onClose}
          ref={closeButtonRef}
        >
          <X size={18} />
        </button>
        <div className="dialog-content">
          <img 
            src={project.image} 
            alt={project.title} 
            className="modal-image"
            width="1000" 
            height="450"
            fetchpriority="high"
          />
          <div className="modal-details">
            <span className="modal-category">{project.categoryLabel}</span>
            <h2 className="modal-title" id={`${project.id}-modal-title`}>{project.title}</h2>
            <p className="modal-description" id={`${project.id}-modal-desc`}>
              {project.description}
            </p>
            {project.challenge && (
              <div>
                <h3 className="modal-subtitle">La sfida</h3>
                <p className="modal-description">
                  {project.challenge}
                </p>
              </div>
            )}
            <div className="modal-features">
              <h4>Elementi sviluppati</h4>
              <ul className="features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx}>
                    <span aria-hidden="true">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            {project.results && (
              <div>
                <h3 className="modal-subtitle">Risultati</h3>
                <p className="modal-description">
                  {project.results}
                </p>
              </div>
            )}
            
            <div className="modal-gallery">
              <h4>Gallery del progetto</h4>
              <div className="gallery-grid">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="gallery-item">
                    <img 
                      src={img.src} 
                      alt={img.alt}
                      width="350" 
                      height="200"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </dialog>
  );
};