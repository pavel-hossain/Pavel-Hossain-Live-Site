import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, Github, Sparkles, Filter, Search, Layers, Play, Star, GitFork, 
  CheckCircle2, ArrowUpRight, BarChart3, Globe, Code2, RefreshCw, X, Zap, Cpu
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { SubAppDemoModal } from './SubAppDemoModal';
import { LanguageProgress } from './LanguageProgress';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTagFilter, setSelectedTagFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'stars' | 'title'>('featured');
  const [selectedSubAppProject, setSelectedSubAppProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Full-Stack', 'Backend & APIs', 'Systems & Linux', 'Web Apps'];

  // Project Stats Calculations
  const totalProjects = FEATURED_PROJECTS.length;
  const liveDeployedApps = FEATURED_PROJECTS.filter(p => p.liveUrl && p.liveUrl !== '#').length;
  const totalSubApps = FEATURED_PROJECTS.filter(p => p.subAppDemo).length;
  const totalStars = FEATURED_PROJECTS.reduce((acc, p) => acc + (p.starsCount || 0), 0);
  const totalForks = FEATURED_PROJECTS.reduce((acc, p) => acc + (p.forksCount || 0), 0);

  // Filter Logic
  let filteredProjects = FEATURED_PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    
    const matchesTag = !selectedTagFilter || project.techTags.some(tag => 
      tag.toLowerCase().includes(selectedTagFilter.toLowerCase()) || 
      selectedTagFilter.toLowerCase().includes(tag.toLowerCase())
    );

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techTags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTag && matchesSearch;
  });

  // Sorting Logic
  filteredProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'stars') {
      return (b.starsCount || 0) - (a.starsCount || 0);
    }
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0; // default featured order
  });

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedTagFilter(null);
    setSearchQuery('');
    setSortBy('featured');
  };

  const handleTagClick = (tag: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedTagFilter === tag) {
      setSelectedTagFilter(null);
    } else {
      setSelectedTagFilter(tag);
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-900/40 relative border-t border-slate-800/80">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Featured Projects & Sites Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafted Applications, Systems & Open Source
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore production web applications, REST API engines, database consoles, and Linux administration automation suites.
          </p>
        </motion.div>

        {/* PROJECT STATS RIBBON BAR */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4 bg-slate-950/90 border border-slate-800/90 rounded-2xl shadow-xl font-mono"
        >
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block uppercase">Total Projects</span>
              <span className="text-lg font-bold text-white">{totalProjects} Crafted</span>
            </div>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block uppercase">Live Deployed</span>
              <span className="text-lg font-bold text-emerald-400">{liveDeployedApps} Active Sites</span>
            </div>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Play className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block uppercase">Sub-App Demos</span>
              <span className="text-lg font-bold text-sky-400">{totalSubApps} Interactive</span>
            </div>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Star className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block uppercase">Community Stars</span>
              <span className="text-lg font-bold text-amber-400">{totalStars} Stars ({totalForks} forks)</span>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block uppercase">System Uptime</span>
              <span className="text-lg font-bold text-purple-300">99.98% Monitored</span>
            </div>
          </div>
        </motion.div>

        {/* LANGUAGE PROGRESS BREAKDOWN COMPONENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <LanguageProgress 
            onSelectLanguageFilter={(lang) => setSelectedTagFilter(lang || null)}
            selectedLanguageFilter={selectedTagFilter}
          />
        </motion.div>

        {/* Filter, Search, and Sort Controls Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
              <span className="text-xs font-mono text-slate-400 mr-2 hidden sm:flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-cyan-400" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search and Sort Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              
              {/* Search Box */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search tech, title, description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 text-slate-200 text-xs font-mono pl-9 pr-8 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500/80 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full sm:w-auto bg-slate-900 text-slate-200 text-xs font-mono px-3 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500/80"
                >
                  <option value="featured">Featured First</option>
                  <option value="stars">Most GitHub Stars</option>
                  <option value="title">Alphabetical (A-Z)</option>
                </select>
              </div>

            </div>

          </div>

          {/* Active Filter Chips / Reset Bar */}
          {(selectedCategory !== 'All' || selectedTagFilter || searchQuery) && (
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-slate-400">Active Filters:</span>
                
                {selectedCategory !== 'All' && (
                  <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-lg flex items-center gap-1">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory('All')} className="hover:text-white"><X className="w-3 h-3" /></button>
                  </span>
                )}

                {selectedTagFilter && (
                  <span className="px-2.5 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-300 rounded-lg flex items-center gap-1">
                    Tech Tag: {selectedTagFilter}
                    <button onClick={() => setSelectedTagFilter(null)} className="hover:text-white"><X className="w-3 h-3" /></button>
                  </span>
                )}

                {searchQuery && (
                  <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-lg flex items-center gap-1">
                    Query: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="hover:text-white"><X className="w-3 h-3" /></button>
                  </span>
                )}
              </div>

              <button
                onClick={handleClearFilters}
                className="text-slate-400 hover:text-cyan-400 flex items-center gap-1 underline text-xs"
              >
                <RefreshCw className="w-3 h-3" /> Clear All Filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Animated Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-slate-950/90 border border-slate-800/90 hover:border-cyan-500/60 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-cyan-950/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all" />

                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-md">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      {project.starsCount && (
                        <span className="flex items-center gap-1 hover:text-cyan-300">
                          <Star className="w-3.5 h-3.5 text-amber-400" /> {project.starsCount}
                        </span>
                      )}
                      {project.forksCount && (
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-slate-400" /> {project.forksCount}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Key Metrics Quick Ribbon if present */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 my-4 p-2.5 bg-slate-900/80 rounded-xl border border-slate-800/80 text-[10px] font-mono">
                      {project.metrics.map((m, idx) => (
                        <div key={idx}>
                          <span className="text-slate-400 block">{m.label}</span>
                          <span className="text-cyan-400 font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags Used (Interactive Filter Triggers) */}
                  <div className="flex flex-wrap gap-1.5 my-4">
                    {project.techTags.map((tag) => {
                      const isTagActive = selectedTagFilter === tag;
                      return (
                        <button
                          key={tag}
                          onClick={(e) => handleTagClick(tag, e)}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded border transition-colors ${
                            isTagActive
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                              : 'bg-slate-900 text-slate-300 border-slate-800/80 hover:border-cyan-500/40 hover:text-cyan-300'
                          }`}
                          title={`Click to filter by ${tag}`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                  {/* 1. Launch App / Interactive Sub-App Button */}
                  <button
                    onClick={() => setSelectedSubAppProject(project)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold font-mono text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow transition-all duration-200 group/btn"
                    title="Launch Interactive Live App Demo"
                  >
                    <Play className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Launch App</span>
                  </button>

                  {/* 2. Live Site Button (if valid URL provided) */}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold font-mono text-emerald-300 hover:text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/50 rounded-xl transition-all duration-200"
                      title="Visit Live Deployed Site"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Live Site</span>
                    </a>
                  )}

                  {/* 3. GitHub Repo Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold font-mono text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 rounded-xl transition-all duration-200"
                    title="View Source Code on GitHub"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-slate-950 rounded-2xl border border-slate-800 space-y-3"
          >
            <p className="text-slate-400 text-sm font-mono">
              No project cards found matching your active filter criteria.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 text-xs font-mono text-cyan-400 bg-slate-900 rounded-lg border border-slate-800 hover:border-cyan-500/40"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}

      </div>

      {/* Interactive Sub-App Demo Modal */}
      <SubAppDemoModal
        project={selectedSubAppProject}
        onClose={() => setSelectedSubAppProject(null)}
      />
    </section>
  );
};
