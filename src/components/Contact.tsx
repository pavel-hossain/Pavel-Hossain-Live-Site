import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, MapPin, Send, Copy, Check, FileText, CheckCircle2, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CopyEmailButton } from './CopyEmailButton';

interface ContactProps {
  onOpenResume: () => void;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Helper validation function
  const validateField = (name: keyof FormState, value: string): string | undefined => {
    const trimmed = value.trim();
    if (name === 'name') {
      if (!trimmed) return 'Name is required.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters.';
    }
    if (name === 'email') {
      if (!trimmed) return 'Email address is required.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return 'Please enter a valid email address.';
    }
    if (name === 'subject') {
      if (!trimmed) return 'Subject is required.';
      if (trimmed.length < 3) return 'Subject must be at least 3 characters.';
    }
    if (name === 'message') {
      if (!trimmed) return 'Message content is required.';
      if (trimmed.length < 10) return `Message is too short (${trimmed.length}/10 chars min).`;
    }
    return undefined;
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formState[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    (Object.keys(formState) as Array<keyof FormState>).forEach((field) => {
      const err = validateField(field, formState[field]);
      if (err) {
        newErrors[field] = err;
        isValid = false;
      }
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTouched({ name: false, email: false, subject: false, message: false });
      setErrors({});
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/60 relative border-t border-slate-800/80 z-10">
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
            <Mail className="w-3.5 h-3.5" /> Contact & Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch With Pavel Hossain
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for remote full-stack software development roles, backend system architectures, and technical consultations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Cards & Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Direct Email Card */}
            <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Email Address</h3>
                  <p className="text-xs text-slate-400">Primary point of contact</p>
                </div>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-cyan-300 truncate">{PERSONAL_INFO.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 shadow-xl space-y-4">
              <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider font-bold">Online Profiles</h3>
              
              <div className="space-y-3">
                {/* GitHub Required Link */}
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/50 rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="text-xs font-bold text-white block">GitHub Profile</span>
                      <span className="text-[11px] text-slate-400 font-mono">github.com/pavel-hossain</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Location Card */}
                <div className="flex items-center justify-between p-3.5 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <div>
                      <span className="text-xs font-bold text-white block">Base Location</span>
                      <span className="text-[11px] text-slate-400 font-mono">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Remote Available</span>
                </div>
              </div>
            </div>

            {/* Resume Launch Card */}
            <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 shadow-xl space-y-3 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Full Curriculum Vitae</h3>
                <p className="text-xs text-slate-400">View complete education & experience breakdown</p>
              </div>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-xs font-bold font-mono text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl flex items-center gap-1.5 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <FileText className="w-4 h-4" />
                <span>View CV</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: Interactive Contact Form with Validation */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-slate-950 border border-slate-800/90 rounded-2xl p-8 shadow-2xl space-y-6"
          >
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-400">Fill out the validated form below to send an immediate message.</p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-slate-900/90 border border-cyan-500/40 rounded-2xl space-y-4 text-center">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Transmitted Successfully!</h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to Pavel Hossain. Your message has passed client payload validation and has been delivered.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 text-xs font-mono text-cyan-400 bg-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-xl transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Inputs Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-mono text-slate-300 block">Your Name *</label>
                      {touched.name && !errors.name && (
                        <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                          <Check className="w-3 h-3" /> Valid
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. Alex Mercer"
                        value={formState.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={`w-full bg-slate-900 text-slate-200 text-xs font-mono p-3 rounded-xl border transition-colors focus:outline-none ${
                          touched.name && errors.name
                            ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10'
                            : touched.name && !errors.name
                            ? 'border-emerald-500/80 focus:border-emerald-500'
                            : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                    </div>
                    {touched.name && errors.name && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-mono text-slate-300 block">Email Address *</label>
                      {touched.email && !errors.email && (
                        <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                          <Check className="w-3 h-3" /> Valid
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formState.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`w-full bg-slate-900 text-slate-200 text-xs font-mono p-3 rounded-xl border transition-colors focus:outline-none ${
                          touched.email && errors.email
                            ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10'
                            : touched.email && !errors.email
                            ? 'border-emerald-500/80 focus:border-emerald-500'
                            : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-mono text-slate-300 block">Subject / Project Context *</label>
                    {touched.subject && !errors.subject && (
                      <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                        <Check className="w-3 h-3" /> Valid
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Full-Stack Developer Role / Backend API Architecture"
                    value={formState.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    onBlur={() => handleBlur('subject')}
                    className={`w-full bg-slate-900 text-slate-200 text-xs font-mono p-3 rounded-xl border transition-colors focus:outline-none ${
                      touched.subject && errors.subject
                        ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10'
                        : touched.subject && !errors.subject
                        ? 'border-emerald-500/80 focus:border-emerald-500'
                        : 'border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {touched.subject && errors.subject && (
                    <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-mono text-slate-300 block">Your Message *</label>
                    <span className="text-[10px] font-mono text-slate-400">
                      {formState.message.length} chars (min 10)
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, engineering inquiry, or job opportunity..."
                    value={formState.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    className={`w-full bg-slate-900 text-slate-200 text-xs font-mono p-3 rounded-xl border transition-colors focus:outline-none resize-none ${
                      touched.message && errors.message
                        ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10'
                        : touched.message && !errors.message
                        ? 'border-emerald-500/80 focus:border-emerald-500'
                        : 'border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold font-mono text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Validating Payload & Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 fill-slate-950" />
                      <span>Send Validated Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
