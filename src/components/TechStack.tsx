import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, Palette, FileJson, Terminal, Server, Cpu, Database, Network, 
  ChevronRight, CheckCircle, Code, Layers, Sparkles, Copy, Check, Eye
} from 'lucide-react';
import { CORE_SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem>(CORE_SKILLS[2]); // Default JavaScript
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = ['All', 'Frontend', 'Backend', 'Systems & OS', 'Databases & APIs'];

  const filteredSkills = selectedCategory === 'All'
    ? CORE_SKILLS
    : CORE_SKILLS.filter(s => s.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-sky-400" />;
      case 'FileJson': return <FileJson className="w-6 h-6 text-yellow-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-emerald-400" />;
      case 'Server': return <Server className="w-6 h-6 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-rose-400" />;
      case 'Database': return <Database className="w-6 h-6 text-blue-400" />;
      case 'Network': return <Network className="w-6 h-6 text-cyan-300" />;
      default: return <Code className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="tech-stack" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" /> Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & Engineering Mastery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Detailed breakdown of languages, frameworks, systems, and database technologies.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid & Code Inspector Dual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skills Cards Grid */}
          <motion.div layout className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => {
                const isSelected = activeSkill.id === skill.id;
                return (
                  <motion.div
                    key={skill.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -3 }}
                    onClick={() => setActiveSkill(skill)}
                    className={`cursor-pointer rounded-2xl p-5 transition-all duration-200 relative border ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400/90 shadow-xl shadow-cyan-950/40 translate-x-1'
                        : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                        {skill.experienceYears}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1">{skill.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-3">
                      {skill.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                        <span>Proficiency</span>
                        <span className="text-cyan-400 font-bold">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800/80">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="bg-gradient-to-r from-cyan-500 to-sky-400 h-full rounded-full"
                        />
                      </div>
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-cyan-300 font-mono">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" /> Inspecting Code
                        </span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Interactive Code & Highlights Inspector Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 sticky top-24"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Header */}
              <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    {getSkillIcon(activeSkill.iconName)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{activeSkill.name}</h4>
                    <span className="text-[11px] font-mono text-cyan-400">{activeSkill.category}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopyCode(activeSkill.codeSnippet)}
                  className="px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded flex items-center gap-1 transition-colors"
                  title="Copy Code Snippet"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 bg-slate-950/90 font-mono text-xs text-slate-300 overflow-x-auto max-h-64 border-b border-slate-800 leading-relaxed">
                <pre>
                  <code>{activeSkill.codeSnippet}</code>
                </pre>
              </div>

              {/* Highlights List */}
              <div className="p-5 space-y-3 bg-slate-900">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Key Competencies</span>
                <div className="space-y-2">
                  {activeSkill.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
