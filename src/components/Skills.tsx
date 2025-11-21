import { Code2 } from 'lucide-react';

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
          {skills.map((category, idx) => (
            <div 
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all animate-fade-in-up card-glow-hover"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Code2 className="w-6 h-6 text-primary" />
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="group p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-all hover:bg-secondary"
                  >
                    <h4 className="font-mono font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
