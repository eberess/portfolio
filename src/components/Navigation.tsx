import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { memo } from "react";

export const Navigation = memo(() => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm" role="navigation" aria-label="Navigation principale">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        <Link 
          href="/" 
          className="font-bold text-2xl"
          aria-label="Retour à l'accueil"
        >
          AB
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="hover:text-foreground/80 transition-colors"
            aria-label="Accueil"
          >
            Accueil
          </Link>
          <Link 
            href="/projects" 
            className="hover:text-foreground/80 transition-colors"
            aria-label="Voir tous les projets"
          >
            Projets
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
});
Navigation.displayName = 'Navigation'; 