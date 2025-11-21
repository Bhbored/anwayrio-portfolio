import { Mail, Phone, MapPin, Github, Linkedin, Clock, Briefcase, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Language {
  name: string;
  level: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  availability: {
    responseTime: string;
    schedule: string;
    projectTypes: string;
  };
}

interface ContactProps {
  contact: ContactInfo;
  languages: Language[];
}

export const Contact = ({ contact, languages }: ContactProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg font-mono">
            <span className="text-primary">$</span> echo "Let's build something amazing together"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all card-glow-hover">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Contact Details
              </h3>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-all group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-mono text-foreground">{contact.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-mono text-foreground">{contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-mono text-foreground">{contact.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  onClick={() => window.open(contact.github, '_blank')}
                  className="flex-1"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  onClick={() => window.open(contact.linkedin, '_blank')}
                  variant="secondary"
                  className="flex-1"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all card-glow-hover">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-foreground font-mono">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all card-glow-hover">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Availability
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Response Time</p>
                  <p className="text-sm text-muted-foreground">{contact.availability.responseTime}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Schedule</p>
                  <p className="text-sm text-muted-foreground">{contact.availability.schedule}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Project Types</p>
                  <p className="text-sm text-muted-foreground">{contact.availability.projectTypes}</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-foreground font-mono text-center">
                  <span className="text-primary">$</span> status: <span className="text-primary">AVAILABLE</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-muted-foreground font-mono text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            © 2024 Anwar El Jundi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
