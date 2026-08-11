import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, Maximize2, Send, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, CORE_SKILLS, FEATURED_PROJECTS, TERMINAL_PRESETS } from '../data/portfolioData';

interface TerminalWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  cmd: string;
  output: React.ReactNode;
}

export const TerminalWidget: React.FC<TerminalWidgetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      cmd: 'whoami',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-400 font-bold">{PERSONAL_INFO.headline}</p>
          <p>{PERSONAL_INFO.subHeadline}</p>
          <p className="text-slate-400">Type <span className="text-amber-300">help</span> to view available commands.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (commandToRun: string) => {
    const trimmed = commandToRun.trim().toLowerCase();
    let output: React.ReactNode;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold mb-1">Available Shell Commands:</p>
            <p><span className="text-amber-300">whoami</span> - Developer bio & headline</p>
            <p><span className="text-amber-300">skills</span> - List all 8 core tech stack items</p>
            <p><span className="text-amber-300">projects</span> - View featured project titles & URLs</p>
            <p><span className="text-amber-300">contact</span> - Contact email & GitHub profile</p>
            <p><span className="text-amber-300">status</span> - System telemetry & uptime details</p>
            <p><span className="text-amber-300">clear</span> - Clear terminal buffer</p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-slate-300 space-y-1">
            <p className="text-cyan-400 font-bold">{PERSONAL_INFO.name}</p>
            <p>{PERSONAL_INFO.aboutStatement}</p>
            <p className="text-slate-400">Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-cyan-400 font-bold">Core Technical Stack:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {CORE_SKILLS.map(s => (
                <div key={s.id} className="bg-slate-900 p-2 rounded border border-slate-800">
                  <span className="text-amber-300 font-bold">{s.name}:</span> {s.experienceYears} ({s.proficiency}%)
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold">Featured Projects:</p>
            {FEATURED_PROJECTS.map((p, idx) => (
              <div key={p.id} className="text-xs space-y-0.5">
                <p className="font-bold text-white">{idx + 1}. {p.title} <span className="text-cyan-400">[{p.category}]</span></p>
                <p className="text-slate-400">{p.shortDescription}</p>
                <p className="text-slate-500 font-mono">Repo: {p.githubUrl}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Connect with Pavel Hossain:</p>
            <p>Email: <span className="text-emerald-300">{PERSONAL_INFO.email}</span></p>
            <p>GitHub: <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.githubUrl}</a></p>
          </div>
        );
        break;

      case 'status':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-emerald-400 font-bold">System Telemetry Output:</p>
            <p>Node Environment: <span className="text-cyan-300">Cloud Server / Linux x86_64</span></p>
            <p>Uptime Record: <span className="text-emerald-300">{PERSONAL_INFO.uptimeRecord}</span></p>
            <p>Active Service: <span className="text-slate-200">Nginx / Systemd Active</span></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        return;

      default:
        output = (
          <p className="text-rose-400">
            Command not recognized: <span className="text-white">'{trimmed}'</span>. Type <span className="text-amber-300">help</span> for command list.
          </p>
        );
    }

    setHistory((prev) => [...prev, { cmd: commandToRun, output }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col h-[520px]">
        
        {/* Terminal Header Bar */}
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs font-mono text-slate-300 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" /> pavel@hossain-sys ~ bash
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-900 rounded border border-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Preset Quick Chips */}
        <div className="bg-slate-950/60 px-4 py-2 border-b border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono shrink-0">
          <span className="text-slate-500 py-0.5">Quick Commands:</span>
          {TERMINAL_PRESETS.map((p) => (
            <button
              key={p.cmd}
              onClick={() => handleCommand(p.cmd)}
              className="px-2 py-0.5 bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 rounded text-[11px] transition-colors"
            >
              {p.cmd}
            </button>
          ))}
        </div>

        {/* Log Buffer Body */}
        <div className="p-4 font-mono text-xs overflow-y-auto flex-1 space-y-4 bg-slate-950/90 leading-relaxed">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyan-400">pavel@hossain-sys:~$</span>
                <span className="text-white font-bold">{item.cmd}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt */}
        <form onSubmit={handleSubmit} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2 shrink-0">
          <span className="text-cyan-400 font-mono text-xs font-bold pl-2">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-slate-200 text-xs font-mono focus:outline-none placeholder-slate-600"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs rounded transition-colors"
          >
            Exec
          </button>
        </form>

      </div>
    </div>
  );
};
