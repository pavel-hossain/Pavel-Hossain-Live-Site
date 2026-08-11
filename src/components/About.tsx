import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Zap, Layers, Server, Terminal, Lock, CheckCircle2, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: 'Secure & Robust Architecture',
      description: 'Prioritizing data security, input sanitization, JWT authorization, and defensive system design from initial schema planning to production.',
    },
    {
      icon: <Zap className="w-6 h-6 text-sky-400" />,
      title: 'High-Performance & Efficiency',
      description: 'Optimizing SQL queries with execution plan indexing, minimizing REST payload latency, and caching high-frequency endpoints.',
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: 'User-Centric & Modern Frontend',
      description: 'Crafting responsive, WCAG-accessible interfaces using semantic HTML5, modern CSS/Tailwind, and fast JavaScript application state.',
    },
    {
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      title: 'Automated Linux Infrastructure',
      description: 'Streamlining server deployments, SSL certificates, systemd background daemons, and bash script task scheduling.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" /> About Pavel Hossain
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building Efficient, Secure & Scalable Software
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A background rooted in full-stack engineering and Linux systems administration.
          </p>
        </motion.div>

        {/* High-Impact Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Statement Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-950 border border-slate-800/90 rounded-2xl p-8 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-2.5 h-8 bg-cyan-400 rounded-full inline-block" />
                Engineering Background & Philosophy
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed font-normal">
                {PERSONAL_INFO.aboutStatement}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Whether developing a high-throughput REST API, automating Linux server workflows via Bash and Python scripts, or engineering responsive, accessible web interfaces, my goal remains consistent: delivers code that is clean, thoroughly tested, and built for durability.
              </p>
            </div>

            {/* Core Checkpoints */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Clean, Well-Documented Codebases</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Defensive Database & API Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Responsive & Accessible UI Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Reliable Automated Linux Deployments</span>
              </div>
            </div>
          </motion.div>

          {/* Side Feature Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/90 rounded-2xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none text-cyan-400">
              <Terminal className="w-48 h-48" />
            </div>

            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Key Focus Areas</span>
              <h4 className="text-2xl font-bold text-white">Full-Stack Capability & Systems Precision</h4>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Bridging the gap between sleek, responsive frontend user interfaces and bulletproof backend infrastructure.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs text-slate-300 flex justify-between items-center">
                  <span>Backend & API Throughput</span>
                  <span className="font-mono text-cyan-400">REST / OpenAPI</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs text-slate-300 flex justify-between items-center">
                  <span>Database Engineering</span>
                  <span className="font-mono text-sky-400">SQL / Indexing</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs text-slate-300 flex justify-between items-center">
                  <span>Linux Infrastructure</span>
                  <span className="font-mono text-emerald-400">Bash / Nginx</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Location: {PERSONAL_INFO.location}</span>
              <span className="text-cyan-400">github.com/pavel-hossain</span>
            </div>
          </motion.div>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
