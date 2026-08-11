import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, Play, Pause, MessageSquare, Award, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-900/60 border-t border-slate-800/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" /> Client & Engineering Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Peer Reviews & Recommendation Testimonials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Feedback from CTOs, lead system architects, and senior product leaders on delivered software.
          </p>
        </motion.div>

        {/* Carousel Outer Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-950 border border-slate-800/90 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden min-h-[340px] flex flex-col justify-between">
            
            {/* Background Decorative Quote Mark */}
            <div className="absolute -top-4 -right-4 p-8 opacity-5 text-cyan-400 pointer-events-none">
              <Quote className="w-64 h-64" />
            </div>

            {/* Testimonial Slide with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6 relative z-10"
              >
                {/* Rating & Date */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="text-xs font-mono text-amber-300 font-bold ml-1.5">5.0 / 5.0</span>
                  </div>

                  {currentTestimonial.linkedProject && (
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono rounded-full">
                      Project: {currentTestimonial.linkedProject}
                    </span>
                  )}
                </div>

                {/* Quote Content */}
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed italic font-sans">
                  "{currentTestimonial.content}"
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-500 to-sky-400 text-slate-950 font-bold font-mono text-sm flex items-center justify-center shadow-lg shadow-cyan-500/20">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        {currentTestimonial.name}
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      </h3>
                      <p className="text-xs text-slate-400">
                        {currentTestimonial.role} • <span className="text-cyan-300 font-semibold">{currentTestimonial.company}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                    {currentTestimonial.date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Bottom Controls Bar */}
            <div className="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 mt-6 relative z-10">
              
              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-8 bg-cyan-400'
                        : 'w-2 bg-slate-800 hover:bg-slate-700'
                    }`}
                    title={`View review by ${t.name}`}
                  />
                ))}
              </div>

              {/* Autoplay & Arrows Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className="p-2 text-xs font-mono text-slate-400 hover:text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg flex items-center gap-1.5 transition-colors mr-2"
                  title={isAutoplay ? 'Pause Autoplay' : 'Start Autoplay'}
                >
                  {isAutoplay ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5 text-slate-400" />}
                  <span className="hidden sm:inline">{isAutoplay ? 'Auto' : 'Paused'}</span>
                </button>

                <button
                  onClick={handlePrev}
                  className="p-2.5 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors hover:border-cyan-500/50"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="p-2.5 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors hover:border-cyan-500/50"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

          {/* Quick Select Thumbnails Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-3 rounded-xl text-left border transition-all duration-200 ${
                  currentIndex === idx
                    ? 'bg-slate-900 border-cyan-500/80 shadow-md shadow-cyan-950/40'
                    : 'bg-slate-950/80 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <p className="text-xs font-bold text-white truncate">{item.name}</p>
                <p className="text-[10px] text-slate-400 truncate">{item.company}</p>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
