import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CopyEmailButtonProps {
  variant?: 'primary' | 'secondary' | 'compact' | 'pill';
  className?: string;
}

export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({ 
  variant = 'secondary',
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (variant === 'compact') {
    return (
      <div className="relative inline-block">
        <button
          onClick={handleCopy}
          className={`p-2 text-xs font-mono text-slate-300 hover:text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 rounded-lg transition-all duration-200 flex items-center justify-center group ${className}`}
          title={`Copy Email: ${PERSONAL_INFO.email}`}
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          )}
        </button>

        <AnimatePresence>
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.9 }}
              className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-[10px] font-mono rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
            >
              Email Copied!
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (variant === 'pill') {
    return (
      <div className="relative inline-block">
        <button
          onClick={handleCopy}
          className={`px-3 py-1.5 text-xs font-mono text-cyan-300 hover:text-white bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:shadow-cyan-950/50 group ${className}`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Mail className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>
    );
  }

  if (variant === 'primary') {
    return (
      <div className="relative inline-block w-full sm:w-auto">
        <button
          onClick={handleCopy}
          className={`w-full sm:w-auto px-5 py-3 text-xs font-bold font-mono text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-200 flex items-center justify-center gap-2 group ${className}`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-slate-950" />
              <span>Copied: {PERSONAL_INFO.email}</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>Copy Email Address</span>
            </>
          )}
        </button>
      </div>
    );
  }

  // Default secondary
  return (
    <div className="relative inline-block">
      <button
        onClick={handleCopy}
        className={`px-4 py-3 text-xs font-mono text-slate-300 hover:text-cyan-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-cyan-950/40 group ${className}`}
        title={`Click to copy: ${PERSONAL_INFO.email}`}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 font-bold">Email Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            <span>Copy Email</span>
          </>
        )}
      </button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 border border-emerald-500/50 text-emerald-300 text-[10px] font-mono rounded-lg shadow-2xl whitespace-nowrap z-50 pointer-events-none flex items-center gap-1"
          >
            <Check className="w-3 h-3 text-emerald-400" /> {PERSONAL_INFO.email}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
