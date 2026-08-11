import React, { useState, useEffect } from 'react';
import { Terminal, Github, Menu, X, Code2, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CopyEmailButton } from './CopyEmailButton';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenTerminal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects & Hub' },
    { id: 'github-stats', label: 'GitHub Activity' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Asset */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-0.5 transition-all duration-300 shrink-0"
          title="Pavel Hossain - Full-Stack & Systems Developer"
        >
          <img
            src="/pavel-hossain-developer-logo.svg"
            alt="Pavel Hossain - Full-Stack & Systems Developer Logo"
            referrerPolicy="no-referrer"
            className="h-9 sm:h-12 w-auto max-h-[50px] object-contain transition-all duration-300 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full px-4 py-1.5 shadow-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <CopyEmailButton variant="pill" />

          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700/80 hover:border-cyan-500/50 rounded-lg transition-all shadow-sm hover:shadow-cyan-950/40 group"
            title="Open Interactive Shell Terminal"
          >
            <Terminal className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            <span>CLI Shell</span>
          </button>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium bg-slate-800/90 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 border border-slate-700/70 hover:border-cyan-400 rounded-lg transition-all duration-200 shadow-sm font-sans group"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <CopyEmailButton variant="compact" />

          <button
            onClick={onOpenTerminal}
            className="p-2 text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg"
            title="Open Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border-l-4 border-cyan-400'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <CopyEmailButton variant="primary" />

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-lg shadow transition-colors"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub Profile (pavel-hossain)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
