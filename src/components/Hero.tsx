import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Code2, Terminal, ShieldCheck, Cpu, Database, Server, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CopyEmailButton } from './CopyEmailButton';

interface HeroProps {
  onViewProjects: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onOpenTerminal }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background ambient light grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability Pill */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono shadow-inner"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </motion.div>

            {/* Main Required Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-none">
                <span className="block text-slate-100">Pavel Hossain</span>
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  Full-Stack & Systems Developer
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.subHeadline}
            </p>

            {/* Core Tech Pill Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'Linux/Bash', 'SQL Databases', 'REST APIs'].map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.04, duration: 0.3 }}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900/90 text-cyan-300 border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {/* Primary Button: View Projects */}
              <button
                onClick={onViewProjects}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Button: GitHub Profile */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/60 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Profile</span>
              </a>

              {/* Copy Email Button */}
              <CopyEmailButton variant="secondary" />
            </div>

            {/* Key Metrics Quick Ribbon */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-mono font-bold text-cyan-400">{PERSONAL_INFO.yearsExperience}</p>
                <p className="text-xs text-slate-400 font-medium">Experience</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-mono font-bold text-white">{PERSONAL_INFO.projectsCompleted}</p>
                <p className="text-xs text-slate-400 font-medium">Shipped Projects</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">{PERSONAL_INFO.uptimeRecord}</p>
                <p className="text-xs text-slate-400 font-medium">Uptime Reliability</p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Code & System Card Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
              {/* Window Bar */}
              <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400">pavel@system-node ~</span>
                </div>
                <button
                  onClick={onOpenTerminal}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 hover:border-cyan-500/40"
                >
                  <Terminal className="w-3 h-3" />
                  <span>Interactive CLI</span>
                </button>
              </div>

              {/* Code Snippet Display */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-3 bg-slate-950/60 leading-relaxed overflow-x-auto">
                <div className="flex items-center gap-2 text-slate-400 pb-2 border-b border-slate-800/60">
                  <span className="text-emerald-400">$</span>
                  <span>curl -s https://pavel-hossain.dev/api/v1/summary</span>
                </div>

                <div className="text-slate-300 space-y-1">
                  <p className="text-cyan-400">{'{'}</p>
                  <p className="pl-4">
                    <span className="text-amber-300">"developer"</span>: <span className="text-emerald-300">"Pavel Hossain"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-amber-300">"role"</span>: <span className="text-emerald-300">"Full-Stack & Systems Developer"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-amber-300">"core_languages"</span>: [<span className="text-cyan-300">"Python"</span>, <span className="text-cyan-300">"PHP"</span>, <span className="text-cyan-300">"JavaScript"</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-amber-300">"systems_and_db"</span>: [<span className="text-sky-300">"Linux/Bash"</span>, <span className="text-sky-300">"SQL Databases"</span>, <span className="text-sky-300">"REST APIs"</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-amber-300">"principles"</span>: [<span className="text-slate-200">"High Throughput"</span>, <span className="text-slate-200">"Clean Code"</span>, <span className="text-slate-200">"Security First"</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-amber-300">"github"</span>: <span className="text-cyan-400">"https://github.com/pavel-hossain"</span>
                  </p>
                  <p className="text-cyan-400">{'}'}</p>
                </div>

                {/* System Status Indicators inside Card */}
                <div className="pt-3 border-t border-slate-800/60 grid grid-cols-2 gap-3 text-[11px]">
                  <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-slate-400 block mb-0.5">Primary Server</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 inline" /> Nginx / Linux (Active)
                    </span>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-slate-400 block mb-0.5">Database Pool</span>
                    <span className="text-cyan-400 font-semibold flex items-center gap-1">
                      <Database className="w-3 h-3 inline" /> PostgreSQL / MySQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
