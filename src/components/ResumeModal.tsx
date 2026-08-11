import React from 'react';
import { X, Download, FileText, CheckCircle2, Award, ExternalLink, Mail, Github, MapPin } from 'lucide-react';
import { PERSONAL_INFO, CORE_SKILLS, WORK_EXPERIENCE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl my-8 overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Pavel Hossain — Curriculum Vitae</h3>
              <p className="text-xs text-slate-400">Full-Stack & Systems Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1.5 text-xs font-mono text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 space-y-8 max-h-[80vh] overflow-y-auto bg-slate-950/60 text-slate-200 font-sans leading-relaxed">
          
          {/* Top Contact Header */}
          <div className="border-b border-slate-800/80 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">{PERSONAL_INFO.name}</h1>
              <p className="text-cyan-400 font-mono text-sm font-semibold mt-1">{PERSONAL_INFO.headline}</p>
            </div>
            <div className="text-xs font-mono space-y-1 text-slate-300">
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.email}</p>
              <p className="flex items-center gap-2"><Github className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.githubUrl}</p>
              <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.location}</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Executive Summary</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.aboutStatement}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Technical Skills & Competencies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {CORE_SKILLS.map((skill) => (
                <div key={skill.id} className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                  <span className="font-bold text-white block mb-0.5">{skill.name}</span>
                  <span className="text-[10px] text-slate-400 block">{skill.category} • {skill.experienceYears}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Professional Experience</h2>
            <div className="space-y-4">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
                  <div className="flex justify-between items-start text-xs font-mono">
                    <div>
                      <span className="font-bold text-white text-sm block">{exp.role}</span>
                      <span className="text-cyan-400">{exp.company} — {exp.location}</span>
                    </div>
                    <span className="text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-300">{exp.description}</p>
                  <ul className="list-disc list-inside text-[11px] text-slate-400 space-y-1 pt-1">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div className="space-y-2">
              <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Education</h2>
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs space-y-1">
                <span className="font-bold text-white block">B.Sc. in Computer Science & Engineering</span>
                <span className="text-slate-400 block">Independent University, Bangladesh</span>
                <span className="text-cyan-400 font-mono text-[11px] block">Graduated with High Honors</span>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Certifications & Credentials</h2>
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs space-y-1.5">
                <p className="text-slate-200 flex items-center gap-2"><Award className="w-3.5 h-3.5 text-cyan-400" /> Linux Systems Administration (RHCSA)</p>
                <p className="text-slate-200 flex items-center gap-2"><Award className="w-3.5 h-3.5 text-cyan-400" /> PostgreSQL Relational Database Architect</p>
                <p className="text-slate-200 flex items-center gap-2"><Award className="w-3.5 h-3.5 text-cyan-400" /> Advanced RESTful API Security Standards</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
