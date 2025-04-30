import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { projectData } from '../data/projectData';

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
      className="project-dialog"
      ref={dialogRef}
      onClick={handleDialogClick}
      role="dialog" 
      aria-modal="true" 
      aria-labelledby={`${project.id}-modal-title`} 
      aria-describedby={`${project.id}-modal-desc`}
    >
      <form method="dialog" className="w-full h-full">
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
            fetchPriority="high"
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
            <div className="mb-8">
              <h4 className="text-xl mb-4 text-content-light dark:text-content-dark">Elementi sviluppati</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span aria-hidden="true" className="text-primary font-bold">✓</span> {feature}
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
            
            <div className="mt-12">
              <h4 className="text-xl mb-6 text-content-light dark:text-content-dark">Gallery del progetto</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-md overflow-hidden h-[200px] shadow-md">
                    <img 
                      src={img.src} 
                      alt={img.alt}
                      width="350" 
                      height="200"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-mid hover:scale-105"
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