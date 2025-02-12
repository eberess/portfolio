import React, { memo } from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    // ... ajoutez les autres propriétés du projet selon vos besoins
  };
  onClick: () => void;
}

export const ProjectCard = memo(({ project, onClick }: ProjectCardProps) => {
  return (
    <article
      role="article"
      className="group relative..."
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      tabIndex={0}
      aria-label={`Projet : ${project.title}`}
    >
      {/* ... reste du code ... */}
    </article>
  );
});
ProjectCard.displayName = 'ProjectCard'; 