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
import Header from '@/components/Header'; // Import the Header component

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Header /> {/* Render the Header component here */}
        <section id="home">
          <Hero
            name={portfolioData.personal.name}
            title={portfolioData.personal.title}
            description={portfolioData.personal.description}
            contact={portfolioData.contact}
          />
        </section>

        <section id="skills">
          <Skills skills={portfolioData.skills} />
        </section>

        <section id="projects">
          <Projects
            projects={portfolioData.projects}
            onProjectClick={setSelectedProject}
          />
        </section>

        <ProjectDetail
          projectId={selectedProject}
          projectDetails={portfolioData.projectDetails}
          onClose={() => setSelectedProject(null)}
        />

        <section id="experience">
          <Experience experience={portfolioData.experience} />
        </section>

        <section id="education">
          <Education education={portfolioData.education} />
        </section>

        <section id="contact">
          <Contact
            contact={portfolioData.contact}
            languages={portfolioData.languages}
          />
        </section>
      </div>
    </div>
  );
};

export default Index;
