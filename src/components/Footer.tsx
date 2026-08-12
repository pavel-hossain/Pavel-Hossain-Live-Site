import React from 'react';
import { Github, ArrowUp, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onOpenTerminal }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-cyan-400 font-bold text-sm">
              PH
            </div>
            <div>
              <p className="text-slate-200 font-bold text-sm">Pavel Hossain</p>
              <p className="text-slate-500 font-mono text-[11px]">Full-Stack & Systems Developer</p>
            </div>
          </div>

          {/* Quick Links & Terminal Trigger */}
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenTerminal}
              className="text-slate-400 hover:text-cyan-400 font-mono text-xs flex items-center gap-1.5 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI Shell</span>
            </button>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <button
              onClick={onScrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Note */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Pavel Hossain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
