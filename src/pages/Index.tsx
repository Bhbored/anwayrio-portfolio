import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { ProjectDetail } from '@/components/ProjectDetail';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { ParticleBackground } from '@/components/ParticleBackground';
import { portfolioData } from '@/data/portfolio';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Hero
          name={portfolioData.personal.name}
          title={portfolioData.personal.title}
          description={portfolioData.personal.description}
          contact={portfolioData.contact}
        />
        
        <Skills skills={portfolioData.skills} />
        
        <Projects 
          projects={portfolioData.projects}
          onProjectClick={setSelectedProject}
        />
        
        <ProjectDetail
          projectId={selectedProject}
          projectDetails={portfolioData.projectDetails}
          onClose={() => setSelectedProject(null)}
        />
        
        <Experience experience={portfolioData.experience} />
        
        <Education education={portfolioData.education} />
        
        <Contact 
          contact={portfolioData.contact}
          languages={portfolioData.languages}
        />
      </div>
    </div>
  );
};

export default Index;
