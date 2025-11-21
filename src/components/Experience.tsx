import { Briefcase, CheckCircle2 } from 'lucide-react';
import useScrollItemAnimation from '@/hooks/useScrollItemAnimation';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg font-mono">
            <span className="text-primary">$</span> cat experience.log
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

          {experience.map((exp, idx) => {
            const animationState = useScrollItemAnimation(`experience-item-${idx}`, idx);

            return (
              <div
                key={idx}
                id={`experience-item-${idx}`}
                className={`relative mb-12 transform transition-all duration-700 ease-out ${
                  animationState.animationPhase === 'hidden'
                    ? 'opacity-0 translate-y-10'
                    : animationState.animationPhase === 'entering'
                      ? 'opacity-100 translate-y-0 duration-500'
                      : 'opacity-100 translate-y-0'
                } ${
                  idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                  style={{
                    left: idx % 2 === 0 ? 'calc(100% + 1px)' : '-1px',
                    transform: 'translateX(0)'
                  }}
                />

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all card-glow-hover">
                  {/* Header */}
                  <div className={`flex items-start gap-3 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/20 flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className={`space-y-2 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li
                        key={respIdx}
                        className={`flex items-start gap-2 text-sm text-muted-foreground ${
                          idx % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
