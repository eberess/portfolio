'use client';

import { ArrowLeft, ArrowRight, ArrowUp, Search } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { useState, useEffect, memo } from "react";
import dynamic from "next/dynamic";

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'web' | 'mobile' | 'desktop';
  status: 'completed' | 'in-progress' | 'planned' | 'canceled' | 'on-hold' | 'labs';
  links?: {
    demo?: string;
    github?: string;
  };
  pattern: React.ReactNode;
  image?: string;
};

const projects: Project[] = [
  {
    id: 8,
    title: "Never Told Legends",
    description: "Never Told Legends est un site web et une application mobile pour l'entreprise Never Told Legends. J'ai contribué à la création et modernisation de l'entreprise.",
    longDescription: "Never Told Legends est un site web et une application mobile pour l'entreprise Never Told Legends. J'ai contribué à la création et modernisation de l'entreprise. Avec comme outils principaux : React Native, Expo, React, TypeScript, TailwindCSS, Firebase, Stripe, React Native Reanimated. L'entreprise est une entreprise de jeux de sociétés et de jeux de rôle.",
    tags: ["React Native", "Expo", "React", "TypeScript", "TailwindCSS", "Firebase", "Stripe", "React Native Reanimated"],
    category: 'mobile',
    status: 'in-progress',
    image: "/projects/ntllogo.webp",
    links: {
      demo: "https://nevertoldlegends.com",
    },
    pattern: (
      <svg className="absolute inset-0 w-full h-full text-foreground/[0.05] [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path fill="currentColor" d="m297-581 149-243q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l149 243q6 10 6 21t-5 20q-5 9-14 14.5t-21 5.5H331q-12 0-21-5.5T296-540q-5-9-5-20t6-21ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-60v-240q0-17 11.5-28.5T160-420h240q17 0 28.5 11.5T440-380v240q0 17-11.5 28.5T400-100H160q-17 0-28.5-11.5T120-140Z" />
      </svg>
    )
  },
  {
    id: 1,
    title: "Wilmore Dynamics",
    description: "Wilmore Dynamics est une entreprise de conseil en technologie et en stratégie. Je suis intervenu pour leur refonte de site web.",
    longDescription: "Un site web complètement réalisé avec les dernières technologies. Utilisation de React pour une interface utilisateur réactive, TypeScript pour un code plus robuste, et TailwindCSS pour un design moderne et responsive.",
    tags: ["React", "TypeScript", "NextJS", "TailwindCSS"],
    category: 'web',
    status: 'completed',
    links: {
      demo: "https://wilmoredynamics.com",
      github: "https://git.wilmoredynamics.com/Wilmore_Dynamics/Wilmore_Dynamics"
    },
    image: "/projects/wilmore.webp",
    pattern: (
      <svg className="absolute inset-0 w-full h-full text-foreground/[0.05] [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path fill="currentColor" d="m297-581 149-243q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l149 243q6 10 6 21t-5 20q-5 9-14 14.5t-21 5.5H331q-12 0-21-5.5T296-540q-5-9-5-20t6-21ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-60v-240q0-17 11.5-28.5T160-420h240q17 0 28.5 11.5T440-380v240q0 17-11.5 28.5T400-100H160q-17 0-28.5-11.5T120-140Z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Alternative Music",
    description: "Alternative Music propose un accompagnement personnalisé pour les musiciens émergents souhaitant se professionnaliser ? . Je suis intervenu pour leur refonte de site web.",
    tags: ["Wordpress", "PHP", "CSS", "Javascript"],
    category: 'web',
    status: 'completed',
    image: "/projects/am.webp",
    links: {
      demo: "https://alternativemusic.fr"
    },
    pattern: (
      <svg className="absolute inset-0 w-full h-full text-foreground/[0.05] [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path fill="currentColor" d="m297-581 149-243q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l149 243q6 10 6 21t-5 20q-5 9-14 14.5t-21 5.5H331q-12 0-21-5.5T296-540q-5-9-5-20t6-21ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-60v-240q0-17 11.5-28.5T160-420h240q17 0 28.5 11.5T440-380v240q0 17-11.5 28.5T400-100H160q-17 0-28.5-11.5T120-140Z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Polyphone Music",
    description: "Polyphone Music est un site web pour le groupe de musique Polyphone. Je suis intervenu pour leur refonte de site web.",
    tags: ["Wordpress", "Docker", "PHP", "CSS", "Javascript"],
    category: 'web',
    status: 'completed',
    image: "/projects/polyphone.webp",
    links: {
      demo: "https://polyphonemusic.fr",
    },
    pattern: (
      <svg className="absolute inset-0 w-full h-full text-foreground/[0.05] rotate-180 [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path fill="currentColor" d="m297-581 149-243q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l149 243q6 10 6 21t-5 20q-5 9-14 14.5t-21 5.5H331q-12 0-21-5.5T296-540q-5-9-5-20t6-21ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-60v-240q0-17 11.5-28.5T160-420h240q17 0 28.5 11.5T440-380v240q0 17-11.5 28.5T400-100H160q-17 0-28.5-11.5T120-140Z" />
      </svg>
    )
  },

  {
    id: 4,
    title: "Intech Paris",
    description: "Intech Paris est un site web pour l'entrepise de maitrise d'oeuvre Intech Paris. Je suis intervenu pour leur refonte de site web.",
    tags: ["Wordpress", "PHP", "CSS", "Javascript"],
    category: 'web',
    status: 'completed',
    image: "/projects/intech.webp",
    links: {
      demo: "https://intechparis.fr",
    },
    pattern: (
      <svg className="absolute inset-0 w-full h-full text-foreground/[0.05] [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path fill="currentColor" d="m297-581 149-243q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l149 243q6 10 6 21t-5 20q-5 9-14 14.5t-21 5.5H331q-12 0-21-5.5T296-540q-5-9-5-20t6-21ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-60v-240q0-17 11.5-28.5T160-420h240q17 0 28.5 11.5T440-380v240q0 17-11.5 28.5T400-100H160q-17 0-28.5-11.5T120-140Z" />
      </svg>
    )
    },
  {
    id: 5,
    title: "Hummink",
    description: "Hummink est une startup innovante issue de l'IPGG et de l'ENS, spécialisée dans une technologie d'impression de haute précision révolutionnaire pour l'industrie des écrans, des semi-conducteurs et de l'électronique imprimée. J'ai contribué à la création de leur site web vitrine.",
    tags: ["Wordpress", "PHP", "CSS", "Javascript"],
    category: 'web',
    status: 'completed',
    image: "/projects/hummink.webp",
    links: {
      demo: "https://hummink.com",
    },
    pattern: (
      <svg className="absolute inset-0 w-full h-full text-foreground/[0.05] [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path fill="currentColor" d="m297-581 149-243q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l149 243q6 10 6 21t-5 20q-5 9-14 14.5t-21 5.5H331q-12 0-21-5.5T296-540q-5-9-5-20t6-21ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-60v-240q0-17 11.5-28.5T160-420h240q17 0 28.5 11.5T440-380v240q0 17-11.5 28.5T400-100H160q-17 0-28.5-11.5T120-140Z" />
      </svg>
    )
  },
  {
    id: 6,
    title: "François Vigorie",
    description: "François Vigorie est un artiste sculpteur sur verre. J'ai contribué à la création de son site web vitrine.",
    tags: ["Wordpress", "PHP", "CSS", "Javascript"],
    category: 'web',
    status: 'completed',
    image: "/projects/fv.webp",
    links: {
      demo: "https://francoisvigorie.com",
    },
    pattern: (
      <svg className="absolute inset-0 w-full h-full text-foreground/[0.05] [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path fill="currentColor" d="m297-581 149-243q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l149 243q6 10 6 21t-5 20q-5 9-14 14.5t-21 5.5H331q-12 0-21-5.5T296-540q-5-9-5-20t6-21ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-60v-240q0-17 11.5-28.5T160-420h240q17 0 28.5 11.5T440-380v240q0 17-11.5 28.5T400-100H160q-17 0-28.5-11.5T120-140Z" />
      </svg>
    )
  },
  {
    id: 7,
    title: "Square",
    description: "Square est un site web pour le studio d'effets visuels Square. J'ai contribué à la création et modernisation du workflow de travail de l'entreprise.",
    longDescription: "Square est un site web pour le studio d'effets visuels Square. J'ai contribué à la création et modernisation du workflow de travail de l'entreprise. En répondant aux obligations légales, des studios de production. Avec comme outils principaux : Proxmox, Python, Docker, Nginx, PHP, MySQL, Kitsu.",
    tags: ["Proxmox", "Python", "Docker", "Nginx", "PHP", "MySQL", "Kitsu", "React", "OpenVpn"],
    category: 'web',
    status: 'completed',
    image: "/projects/square.webp",
    links: {
      demo: "https://square-vfx.com",
    },
    pattern: (
      <svg className="absolute inset-0 w-full h-full text-foreground/[0.05] [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path fill="currentColor" d="m297-581 149-243q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l149 243q6 10 6 21t-5 20q-5 9-14 14.5t-21 5.5H331q-12 0-21-5.5T296-540q-5-9-5-20t6-21ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-60v-240q0-17 11.5-28.5T160-420h240q17 0 28.5 11.5T440-380v240q0 17-11.5 28.5T400-100H160q-17 0-28.5-11.5T120-140Z" />
      </svg>
    )
  },

  
];

// Extraire les données uniques pour les filtres
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
const allCategories = Array.from(new Set(projects.map(project => project.category)));

const ProjectCard = memo(({ project, onClick }: { project: Project, onClick: () => void }) => (
  <button
    onClick={onClick}
    className="text-left group relative aspect-[4/3] bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-3xl overflow-hidden hover:from-foreground/15 hover:to-foreground/10 transition-all duration-300 border border-foreground/10"
  >
    {project.image && (
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
      />
    )}
    {project.pattern}
    <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-t from-background/90 via-background/50 to-transparent">
      <div className="flex flex-wrap gap-2">
        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
          project.status === 'completed' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
          project.status === 'in-progress' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
          project.status === 'planned' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' :
          project.status === 'canceled' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
          project.status === 'on-hold' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
          'bg-purple-500/10 text-purple-500 border-purple-500/20'
        }`}>
          {project.status === 'completed' ? 'Terminé' :
           project.status === 'in-progress' ? 'En cours' :
           project.status === 'planned' ? 'Planifié' :
           project.status === 'canceled' ? 'Annulé' :
           project.status === 'on-hold' ? 'En pause' :
           'Laboratoire'}
        </span>
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 text-foreground/80 backdrop-blur-sm border border-foreground/10"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold group-hover:text-foreground transition-colors">
          {project.title}
        </h3>
        <p className="text-base text-foreground/70 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium text-foreground/70">
          <span className="group-hover:translate-x-0.5 transition-transform">
            En savoir plus
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </button>
));
ProjectCard.displayName = 'ProjectCard';

const DynamicProjectModal = dynamic(() => import('@/components/ProjectModal').then(mod => mod.ProjectModal), {
  loading: () => <div>Chargement...</div>,
  ssr: false,
})

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Fonction pour réinitialiser tous les filtres
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSelectedCategories([]);
  };

  // Suggestions de tags basées sur la recherche
  const suggestedTags = searchQuery
    ? allTags.filter(tag => 
        tag.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !selectedTags.includes(tag)
      )
    : [];

  const filteredProjects = projects
    .filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = 
        selectedTags.length === 0 || 
        selectedTags.every(tag => project.tags.includes(tag));
      
      const matchesCategories = 
        selectedCategories.length === 0 || 
        selectedCategories.includes(project.category);

      return matchesSearch && matchesTags && matchesCategories;
    });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Gérer l'affichage du bouton de retour en haut
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navigation />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* En-tête avec titre et bouton retour */}
          <div className="flex items-center gap-6 mb-12">
            <Link
              href="/"
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Retour
            </Link>
            <h1 className="text-4xl font-bold">Projets</h1>
          </div>

          {/* Filtres et recherche améliorés */}
          <div className="space-y-6 mb-12">
            {/* Barre de recherche avec suggestions */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/60" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-foreground/5 border border-foreground/10 focus:outline-none focus:border-foreground/20 transition-colors placeholder:text-foreground/40"
              />
              {/* Suggestions de tags */}
              {suggestedTags.length > 0 && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl bg-background border border-foreground/10 shadow-lg">
                  {suggestedTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSelectedTags(prev => [...prev, tag]);
                        setSearchQuery("");
                      }}
                      className="block w-full text-left px-3 py-2 rounded-lg hover:bg-foreground/5 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      selectedTags.includes(tag)
                        ? "bg-foreground text-background border-foreground"
                        : "bg-foreground/5 border-foreground/10 hover:bg-foreground/10"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Catégories */}
              <div className="flex flex-wrap gap-2">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategories(prev =>
                        prev.includes(category)
                          ? prev.filter(c => c !== category)
                          : [...prev, category]
                      );
                    }}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      selectedCategories.includes(category)
                        ? "bg-foreground text-background border-foreground"
                        : "bg-foreground/5 border-foreground/10 hover:bg-foreground/10"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              {/* Bouton de réinitialisation - visible uniquement si des filtres sont actifs */}
              {(selectedTags.length > 0 || selectedCategories.length > 0 || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          </div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Bouton retour en haut */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-4 rounded-full bg-foreground text-background shadow-lg hover:bg-foreground/90 transition-all duration-300 animate-fade-in"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}

          {/* Modal */}
          {selectedProject && (
            <DynamicProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </div>
    </>
  );
} 