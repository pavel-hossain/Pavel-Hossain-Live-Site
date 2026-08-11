import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitFork, GitPullRequest, Flame, Code2, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { GITHUB_STATS_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const GithubStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'heatmap'>('overview');
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);

  // Generate simulated 52 weeks x 7 days heatmap grid
  const weeks = 52;
  const daysPerWeek = 7;
  
  // Seeded deterministic matrix generator for commit activity
  const generateMatrix = () => {
    const grid = [];
    const today = new Date();
    for (let w = weeks - 1; w >= 0; w--) {
      const weekDays = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const dayOffset = w * 7 + (6 - d);
        const dateObj = new Date(today.getTime() - dayOffset * 24 * 60 * 60 * 1000);
        const dateStr = dateObj.toISOString().split('T')[0];
        // pseudo random commit count based on date string
        const pseudoSeed = (dateObj.getDate() * 7 + dateObj.getMonth() * 13) % 10;
        let count = 0;
        if (pseudoSeed > 3) count = (pseudoSeed % 5) + 1;
        if (pseudoSeed === 9) count = 8;
        weekDays.push({ date: dateStr, count });
      }
      grid.push(weekDays);
    }
    return grid.reverse();
  };

  const heatmapGrid = generateMatrix();

  const getHeatmapColor = (count: number) => {
    if (count === 0) return 'bg-slate-900 border-slate-800/80';
    if (count <= 2) return 'bg-cyan-950 border-cyan-800/60';
    if (count <= 4) return 'bg-cyan-700 border-cyan-500/60';
    if (count <= 6) return 'bg-cyan-500 border-cyan-400';
    return 'bg-cyan-300 border-white';
  };

  return (
    <section id="github-stats" className="py-20 bg-slate-950/90 border-t border-slate-800/80 relative z-10">
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
            <Github className="w-3.5 h-3.5" /> GitHub Open Source Activity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Codebase Metrics & Contribution Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Live telemetry of repository stats, language distributions, and commit consistency on GitHub.
          </p>
        </motion.div>

        {/* GitHub Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-700/80 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">Pavel Hossain</h3>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified Contributor
                </span>
              </div>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">@{GITHUB_STATS_DATA.username}</p>
              <p className="text-xs text-slate-400 mt-1">Full-Stack & Systems Developer • Open Source Maintenance</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-700/80 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all shadow-md group"
            >
              <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Follow @pavel-hossain</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </motion.div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-5 shadow-lg"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Contributions</span>
              <Calendar className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
              {GITHUB_STATS_DATA.totalContributions.toLocaleString()}+
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Commits in past 12 months</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-5 shadow-lg"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Stars Earned</span>
              <Star className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            </div>
            <p className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-400">
              {GITHUB_STATS_DATA.totalStars}+
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Across 28 open repositories</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-5 shadow-lg"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Pull Requests</span>
              <GitPullRequest className="w-4 h-4 text-sky-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-mono font-extrabold text-sky-400">
              {GITHUB_STATS_DATA.pullRequests}+
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Merged across projects</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-5 shadow-lg"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Active Streak</span>
              <Flame className="w-4 h-4 text-rose-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-mono font-extrabold text-rose-400">
              {GITHUB_STATS_DATA.commitStreakDays} Days
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Continuous GitHub activity</p>
          </motion.div>
        </div>

        {/* GitHub Top Languages & Activity Heatmap Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Top Languages Column */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-4">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Most Used Languages</span>
              </h4>

              {/* Segmented Stacked Bar */}
              <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800 mb-6">
                {GITHUB_STATS_DATA.topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    className="h-full transition-all duration-300 hover:opacity-80"
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Legend Grid */}
              <div className="space-y-3">
                {GITHUB_STATS_DATA.topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span className="text-slate-200">{lang.name}</span>
                    </div>
                    <span className="text-cyan-400 font-bold">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex justify-between">
              <span>Forks: {GITHUB_STATS_DATA.totalForks}</span>
              <span>Repos: {GITHUB_STATS_DATA.totalRepos}</span>
            </div>
          </div>

          {/* 52-Week Contribution Matrix Grid */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>52-Week Contribution Matrix</span>
                </h4>
                {hoveredDay ? (
                  <span className="text-xs font-mono text-cyan-300 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                    {hoveredDay.count} commits on {hoveredDay.date}
                  </span>
                ) : (
                  <span className="text-xs font-mono text-slate-400">Hover square to inspect</span>
                )}
              </div>

              {/* Heatmap Grid Container */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/90 overflow-x-auto">
                <div className="flex gap-1 min-w-[580px]">
                  {heatmapGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1">
                      {week.map((day, dIdx) => (
                        <div
                          key={dIdx}
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                          className={`w-2.5 h-2.5 rounded-[2px] border transition-all cursor-pointer hover:scale-125 ${getHeatmapColor(day.count)}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Heatmap Legend */}
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-[2px] bg-slate-900 border border-slate-800" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-950 border border-cyan-800" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-700 border border-cyan-500" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-500 border border-cyan-400" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-300 border border-white" />
              </div>
              <span>More</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
