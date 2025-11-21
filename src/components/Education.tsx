import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string[];
  acronym: string;
  gradient: string;
}

interface EducationProps {
  education: EducationItem[];
}

export const Education = ({ education }: EducationProps) => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Education
          </h2>
          <p className="text-muted-foreground text-lg font-mono">
            <span className="text-primary">$</span> grep -r "degree" ~/education/
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all animate-fade-in-up card-glow-hover"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-br ${edu.gradient} p-6 relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                    <span className="text-2xl font-bold text-white">
                      {edu.acronym}
                    </span>
                  </div>
                  <GraduationCap className="w-12 h-12 text-white ml-auto" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <p className="text-sm">{edu.institution}</p>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 text-primary" />
                  <p className="text-sm font-mono">{edu.period}</p>
                </div>

                <ul className="space-y-2">
                  {edu.details.map((detail, detailIdx) => (
                    <li
                      key={detailIdx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
