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
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Scroll animation states
  const homeAnimation = useScrollAnimation('home');
  const skillsAnimation = useScrollAnimation('skills');
  const projectsAnimation = useScrollAnimation('projects');
  const experienceAnimation = useScrollAnimation('experience');
  const educationAnimation = useScrollAnimation('education');
  const contactAnimation = useScrollAnimation('contact');

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Header /> {/* Render the Header component here */}

        {/* Hero section with modern scroll animation */}
        <section
          id="home"
          className={`transform transition-all duration-1000 ease-out ${
            homeAnimation.animationPhase === 'hidden'
              ? 'opacity-0 scale-95 translate-y-10'
              : homeAnimation.animationPhase === 'entering'
                ? 'opacity-100 scale-100 translate-y-0 duration-700'
                : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          <Hero
            name={portfolioData.personal.name}
            title={portfolioData.personal.title}
            description={portfolioData.personal.description}
            contact={portfolioData.contact}
          />
        </section>

        {/* Skills section with modern scroll animation */}
        <section
          id="skills"
          className={`transform transition-all duration-1000 ease-out ${
            skillsAnimation.animationPhase === 'hidden'
              ? 'opacity-0 scale-95 translate-y-10'
              : skillsAnimation.animationPhase === 'entering'
                ? 'opacity-100 scale-100 translate-y-0 duration-700'
                : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          <Skills skills={portfolioData.skills} />
        </section>

        {/* Projects section with modern scroll animation */}
        <section
          id="projects"
          className={`transform transition-all duration-1000 ease-out ${
            projectsAnimation.animationPhase === 'hidden'
              ? 'opacity-0 scale-95 translate-y-10'
              : projectsAnimation.animationPhase === 'entering'
                ? 'opacity-100 scale-100 translate-y-0 duration-700'
                : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
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

        {/* Experience section with modern scroll animation */}
        <section
          id="experience"
          className={`transform transition-all duration-1000 ease-out ${
            experienceAnimation.animationPhase === 'hidden'
              ? 'opacity-0 scale-95 translate-y-10'
              : experienceAnimation.animationPhase === 'entering'
                ? 'opacity-100 scale-100 translate-y-0 duration-700'
                : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          <Experience experience={portfolioData.experience} />
        </section>

        {/* Education section with modern scroll animation */}
        <section
          id="education"
          className={`transform transition-all duration-1000 ease-out ${
            educationAnimation.animationPhase === 'hidden'
              ? 'opacity-0 scale-95 translate-y-10'
              : educationAnimation.animationPhase === 'entering'
                ? 'opacity-100 scale-100 translate-y-0 duration-700'
                : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          <Education education={portfolioData.education} />
        </section>

        {/* Contact section with modern scroll animation */}
        <section
          id="contact"
          className={`transform transition-all duration-1000 ease-out ${
            contactAnimation.animationPhase === 'hidden'
              ? 'opacity-0 scale-95 translate-y-10'
              : contactAnimation.animationPhase === 'entering'
                ? 'opacity-100 scale-100 translate-y-0 duration-700'
                : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
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
