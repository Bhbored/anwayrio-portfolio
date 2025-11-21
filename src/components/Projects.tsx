import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  gradient: string;
  icon: string;
}

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (id: number) => void;
}

export const Projects = ({ projects, onProjectClick }: ProjectsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  // Generate fallback color based on project title
  const generateColor = (title: string) => {
    const colors = [
      'from-emerald-500 to-teal-600',
      'from-green-500 to-emerald-600',
      'from-teal-500 to-cyan-600',
      'from-cyan-500 to-blue-600',
      'from-primary to-accent'
    ];
    const index = title.length % colors.length;
    return colors[index];
  };

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg font-mono">
            <span className="text-primary">$</span> cd projects && ls
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <Button
              onClick={() => scroll('left')}
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          )}
          
          {canScrollRight && (
            <Button
              onClick={() => scroll('right')}
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          )}

          {/* Projects Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[350px] snap-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  onClick={() => onProjectClick(project.id)}
                  className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all cursor-pointer group/card card-glow-hover"
                >
                  {/* Project Header with Gradient */}
                  <div className={`bg-gradient-to-br ${project.gradient || generateColor(project.title)} p-8 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div 
                      className="relative z-10 text-white"
                      dangerouslySetInnerHTML={{ __html: project.icon }}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover/card:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="text-xs px-3 py-1 bg-secondary text-foreground rounded-full border border-border font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <div className="flex items-center gap-2 text-primary text-sm font-mono group-hover/card:gap-3 transition-all">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
