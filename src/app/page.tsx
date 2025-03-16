import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import { Navigation } from "@/components/Navigation";
import { Metadata } from 'next'

const featuredProjects = [
  {
    id: 1,
    title: "Wilmore Dynamics",
    description: "Wilmore Dynamics est une entreprise de conseil en technologie et en stratégie. Je suis intervenu pour leur refonte de site web.",
    tags: ["React", "TypeScript", "NextJS", "TailwindCSS"],
    href: "https://wilmoredynamics.com",
    image: "/projects/wilmore.webp",
    pattern: (
      <svg 
        className="absolute inset-0 w-full h-full text-foreground/[0.05] [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 -960 960 960"
        aria-hidden="true"
        role="presentation"
        width="100%"
        height="100%"
      >
        <path fill="currentColor" d="m297-581 149-243q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l149 243q6-10 6 21t-5 20q-5 9-14 14.5t-21 5.5H331q-12 0-21-5.5T296-540q-5-9-5-20t6-21ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-60v-240q0-17 11.5-28.5T160-420h240q17 0 28.5 11.5T440-380v240q0 17-11.5 28.5T400-100H160q-17 0-28.5-11.5T120-140Z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Alternative Music",
    description: "Alternative Music est un site web d'aide et de conseil dans le droit musical. Je suis intervenu pour leur refonte de site web.",
    tags: ["Wordpress", "PHP", "CSS", "Javascript"],
    href: "https://alternativemusic.fr",
    image: "/projects/am.webp",
    pattern: (
      <svg className="absolute inset-0 w-full h-full text-foreground/[0.05] rotate-180 [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path fill="currentColor" d="m297-581 149-243q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l149 243q6 10 6 21t-5 20q-5 9-14 14.5t-21 5.5H331q-12 0-21-5.5T296-540q-5-9-5-20t6-21ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-60v-240q0-17 11.5-28.5T160-420h240q17 0 28.5 11.5T440-380v240q0 17-11.5 28.5T400-100H160q-17 0-28.5-11.5T120-140Z"/>
      </svg>
    )
  },
];

export const metadata: Metadata = {
  openGraph: {
    title: 'Amin Beressa | Développeur & Chef de projet',
    description: 'Bienvenue sur mon portfolio. Découvrez mes projets et compétences en développement web et gestion de projet.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Amin Beressa - Portfolio'
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        <div className="min-h-screen pt-20 flex flex-col items-center justify-center p-4 space-y-12">
          {/* Hero Section */}
          <div className="max-w-3xl text-center">
            <h1 className="text-6xl sm:text-7xl font-bold">
              Amin Beressa
              <span className="block mt-4 text-2xl sm:text-3xl text-foreground/60 font-normal">
                Développeur & Chef de projet
              </span>
            </h1>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link 
              href="/projects"
              className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
            >
              Projets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <ContactButton />
          </div>

          {/* Section Projets avec marges harmonisées */}
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Projets récents</h2>
              <Link 
                href="/projects"
                className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                Voir tous les projets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={project.href}
                  className="group relative aspect-square bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-3xl overflow-hidden hover:from-foreground/15 hover:to-foreground/10 transition-all duration-300 border border-foreground/10"
                  aria-label={`Voir le projet ${project.title}`}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                    />
                  )}
                  {project.pattern}
                  <div 
                    className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-t from-background/90 via-background/50 to-transparent"
                  >
                    <div className="flex flex-wrap gap-2">
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
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Location en position fixe en bas */}
        <div className="bottom-8 left-0 right-0 text-center text-foreground/60 pointer-events-none">
          <p>Paris, France</p>
        </div>
      </main>
    </>
  );
}
