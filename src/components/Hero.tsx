import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'; // Import Avatar components
import { portfolioData } from '@/data/portfolio'; // Import portfolioData
import heroBackground from '@/assets/hero-background.jpg';

interface HeroProps {
  name: string;
  title: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
}

export const Hero = ({ name, title, description, contact }: HeroProps) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    if (titleIndex < title.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(title.slice(0, titleIndex + 1));
        setTitleIndex(titleIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [titleIndex, title]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Profile Picture */}
        <div className="mb-8 animate-fade-in">
          <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary shadow-lg">
            <AvatarImage src={portfolioData.personal.profileImage} alt={portfolioData.personal.name} />
            <AvatarFallback className="text-5xl font-bold">
              {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="inline-block mb-4">
            <span className="text-primary font-mono text-lg">
              $ whoami
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-gradient">
            {name}
          </h1>
          <div className="h-12 mb-6">
            <h2 className="text-2xl md:text-3xl font-mono text-foreground">
              <span className="text-primary">&gt;</span> {displayedTitle}
              <span className="animate-pulse text-primary">|</span>
            </h2>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up leading-relaxed">
          {description}
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          <a 
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-all hover:card-glow"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm">{contact.email}</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm">{contact.phone}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">{contact.location}</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 animate-fade-in-up">
          <Button 
            size="lg"
            className="group"
            onClick={() => window.open(contact.github, '_blank')}
          >
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            GitHub
          </Button>
          <Button 
            size="lg"
            variant="secondary"
            className="group"
            onClick={() => window.open(contact.linkedin, '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            LinkedIn
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
