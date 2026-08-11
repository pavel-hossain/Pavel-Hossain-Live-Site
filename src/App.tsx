import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { GithubStats } from './components/GithubStats';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalWidget } from './components/TerminalWidget';
import { ResumeModal } from './components/ResumeModal';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 relative">
      {/* Particle Interactive Background */}
      <ParticleBackground />

      {/* Scroll Progress Bar at top */}
      <ScrollProgress />

      {/* Modern Custom Glowing Cursor */}
      <CustomCursor />

      {/* Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onViewProjects={() => scrollToSection('projects')}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* 2. About Section */}
        <About />

        {/* 3. Tech Stack Section */}
        <TechStack />

        {/* 4. Featured Projects & Sites Hub */}
        <Projects />

        {/* 5. GitHub Activity & Metrics */}
        <GithubStats />

        {/* 6. Peer & Client Testimonials */}
        <TestimonialsCarousel />

        {/* 7. Work Experience Timeline */}
        <Experience />

        {/* 8. Contact & Connect Section */}
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onScrollToTop={() => scrollToSection('hero')}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Terminal Shell Widget Modal */}
      <TerminalWidget
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
