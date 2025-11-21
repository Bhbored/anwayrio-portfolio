import { Code2 } from 'lucide-react';
import useScrollItemAnimation from '@/hooks/useScrollItemAnimation';

interface Skill {
  name: string;
  desc: string;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg font-mono">
            <span className="text-primary">$</span> ls -la skills/
          </p>
        </div>

        <div className="grid gap-8">
          {skills.map((category, idx) => {
            const categoryAnimation = useScrollItemAnimation(`skill-category-${idx}`, idx);
            return (
              <div
                key={idx}
                id={`skill-category-${idx}`}
                className={`bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all card-glow-hover transform transition-all duration-700 ease-out ${
                  categoryAnimation.animationPhase === 'hidden'
                    ? 'opacity-0 translate-y-10'
                    : categoryAnimation.animationPhase === 'entering'
                      ? 'opacity-100 translate-y-0 duration-500'
                      : 'opacity-100 translate-y-0'
                }`}
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-primary" />
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((skill, skillIdx) => {
                    const skillAnimation = useScrollItemAnimation(`skill-${idx}-${skillIdx}`, skillIdx);
                    return (
                      <div
                        key={skillIdx}
                        id={`skill-${idx}-${skillIdx}`}
                        className={`group p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-all hover:bg-secondary transform transition-all duration-500 ease-out ${
                          skillAnimation.animationPhase === 'hidden'
                            ? 'opacity-0 translate-y-8'
                            : skillAnimation.animationPhase === 'entering'
                              ? 'opacity-100 translate-y-0 duration-300'
                              : 'opacity-100 translate-y-0'
                        }`}
                        style={{ transitionDelay: `${skillIdx * 50}ms` }}
                      >
                        <h4 className="font-mono font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
