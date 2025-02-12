'use client';

import { X } from "lucide-react";
import { useEffect } from "react";

type ProjectModalProps = {
  project: {
    title: string;
    description: string;
    tags: string[];
    status: 'completed' | 'in-progress' | 'planned' | 'canceled' | 'on-hold' | 'labs';
    links?: {
      demo?: string;
      github?: string;
    };
    longDescription?: string;
  };
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const statusLabels = {
    'completed': 'Terminé',
    'in-progress': 'En cours',
    'planned': 'Planifié',
    'canceled': 'Annulé',
    'on-hold': 'En pause',
    'labs': 'Le Lab'
  };

  const statusColors = {
    'completed': 'bg-green-500/10 text-green-500 border-green-500/20',
    'in-progress': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    'planned': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    'canceled': 'bg-red-500/10 text-red-500 border-red-500/20',
    'on-hold': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    'labs': 'bg-purple-500/10 text-purple-500 border-purple-500/20'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl bg-background border border-foreground/10 rounded-3xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-foreground/10">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${statusColors[project.status]}`}>
              {statusLabels[project.status]}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 text-foreground/80 border border-foreground/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-foreground/70">
            {project.longDescription || project.description}
          </p>

          {/* Links */}
          {project.links && (
            <div className="flex gap-4">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  Voir la démo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-colors"
                >
                  Voir sur GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 