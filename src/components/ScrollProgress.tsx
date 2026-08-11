import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const percentage = (currentScroll / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, percentage)));
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      {/* Top Progress Line */}
      <div className="h-[3px] w-full bg-slate-900/50 backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        />
      </div>

      {/* Optional Floating Percentage Pill when scrolling */}
      {scrollProgress > 5 && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-[101] hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/90 border border-slate-800/80 text-[10px] font-mono text-cyan-400 shadow-xl backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{Math.round(scrollProgress)}% Scrolled</span>
        </motion.div>
      )}
    </div>
  );
};
