import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, GitCommit, Sparkles, Terminal, FileCode, CheckCircle2, Filter } from 'lucide-react';

export interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
  bgColor: string;
  borderColor: string;
  codeLines: string;
  projectCount: number;
  description: string;
  category: string;
}

export const LANGUAGE_STATS: LanguageStat[] = [
  {
    name: 'Python',
    percentage: 32.5,
    color: '#38bdf8', // Cyan/Sky
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    codeLines: '14,200+ Lines',
    projectCount: 3,
    description: 'Django & Flask REST APIs, data pipelines, automation scripts, and system diagnostics.',
    category: 'Backend & Automation'
  },
  {
    name: 'PHP',
    percentage: 24.0,
    color: '#a78bfa', // Purple/Violet
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    codeLines: '10,800+ Lines',
    projectCount: 2,
    description: 'POS inventory engine, automated VAT calculations, and Mess Meal ledger system.',
    category: 'Full-Stack Web'
  },
  {
    name: 'JavaScript / TS',
    percentage: 22.5,
    color: '#facc15', // Yellow
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    codeLines: '9,900+ Lines',
    projectCount: 6,
    description: 'React SPAs, interactive POS terminals, live meal calculators, and Node.js microservices.',
    category: 'Frontend & Node.js'
  },
  {
    name: 'SQL (MySQL)',
    percentage: 12.0,
    color: '#fb923c', // Orange
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    codeLines: '5,200+ Lines',
    projectCount: 4,
    description: 'Relational database architecture, optimized indexing, transaction ledgers, and foreign keys.',
    category: 'Databases & Storage'
  },
  {
    name: 'HTML / CSS',
    percentage: 6.0,
    color: '#f87171', // Red/Coral
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
    codeLines: '2,800+ Lines',
    projectCount: 6,
    description: 'Tailwind CSS layouts, dark-mode terminal themes, accessible responsive structures.',
    category: 'UI & Web Standards'
  },
  {
    name: 'Linux / Shell',
    percentage: 3.0,
    color: '#4ade80', // Green
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    codeLines: '1,300+ Lines',
    projectCount: 3,
    description: 'Bash deployment daemons, Nginx reverse proxy configs, systemd services, and cron jobs.',
    category: 'DevOps & Systems'
  }
];

interface LanguageProgressProps {
  onSelectLanguageFilter?: (langName: string) => void;
  selectedLanguageFilter?: string | null;
}

export const LanguageProgress: React.FC<LanguageProgressProps> = ({
  onSelectLanguageFilter,
  selectedLanguageFilter
}) => {
  const [hoveredLang, setHoveredLang] = useState<string | null>(null);

  return (
    <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 shadow-2xl space-y-6">
      
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
            <FileCode className="w-3.5 h-3.5" /> Language & Codebase Distribution
          </div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>Repository Tech Breakdown</span>
            <span className="text-xs font-mono font-normal text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full">
              44,200+ total LOC
            </span>
          </h3>
        </div>

        <div className="text-xs font-mono text-slate-400 flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Calculated across 6 core projects</span>
        </div>
      </div>

      {/* GitHub-Style Segmented Animated Bar */}
      <div className="space-y-2">
        <div className="h-3.5 w-full bg-slate-900 rounded-full overflow-hidden flex p-0.5 gap-0.5 border border-slate-800">
          {LANGUAGE_STATS.map((lang) => {
            const isHovered = hoveredLang === lang.name;
            const isSelected = selectedLanguageFilter === lang.name;
            return (
              <motion.button
                key={lang.name}
                onClick={() => onSelectLanguageFilter?.(lang.name)}
                onMouseEnter={() => setHoveredLang(lang.name)}
                onMouseLeave={() => setHoveredLang(null)}
                className="h-full first:rounded-l-full last:rounded-r-full transition-all relative group"
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color,
                  opacity: (hoveredLang && !isHovered) || (selectedLanguageFilter && !isSelected) ? 0.35 : 1
                }}
                whileHover={{ scaleY: 1.25 }}
                title={`${lang.name}: ${lang.percentage}% (${lang.codeLines})`}
              />
            );
          })}
        </div>

        {/* Dynamic Tooltip / Status hint */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
          <span>Click any language to filter projects by technology</span>
          {selectedLanguageFilter && (
            <button
              onClick={() => onSelectLanguageFilter?.('')}
              className="text-cyan-400 hover:text-cyan-300 underline flex items-center gap-1"
            >
              Reset language filter
            </button>
          )}
        </div>
      </div>

      {/* Grid Legend Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {LANGUAGE_STATS.map((lang) => {
          const isSelected = selectedLanguageFilter === lang.name;
          return (
            <motion.div
              key={lang.name}
              onClick={() => onSelectLanguageFilter?.(lang.name)}
              onMouseEnter={() => setHoveredLang(lang.name)}
              onMouseLeave={() => setHoveredLang(null)}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'bg-slate-900 border-cyan-400 shadow-md shadow-cyan-950/50'
                  : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full inline-block shadow-sm"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-xs font-bold text-white font-mono">{lang.name}</span>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400">{lang.percentage}%</span>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                <span>{lang.codeLines}</span>
                <span>{lang.projectCount} Projects</span>
              </div>

              <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                {lang.description}
              </p>

              {isSelected && (
                <div className="mt-2 text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Active Project Filter
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

    </div>
  );
};
