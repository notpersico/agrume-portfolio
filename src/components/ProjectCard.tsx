import React from 'react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onSelect: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article className="project-card" data-category={project.category}>
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title}
          width="400" 
          height="300"
          loading="lazy"
          decoding="async"
        />
        <div className="project-category">{project.categoryLabel}</div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <button 
          className="project-link btn btn--small"
          onClick={() => onSelect(project.id)}
          aria-controls={`${project.id}-modal`}
        >
          Vedi case study <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
};