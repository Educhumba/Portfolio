import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Layers, Award, Briefcase, Mail, Sparkles } from 'lucide-react';

const iconMap = {
  home: Home,
  about: User,
  expertise: Sparkles,
  skills: Layers,
  work: Briefcase,
  projects: Sparkles,
  certifications: Award,
  experience: Briefcase,
  contact: Mail
};

export default function Sidebar({ items, activeId, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-y-0 left-0 z-40 hidden w-72 xl:flex flex-col justify-between rounded-[32px] border border-slate-200/60 bg-white/80 shadow-2xl shadow-slate-300/10 backdrop-blur-xl p-6 m-6">
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-16 w-16 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <img src={`${import.meta.env.BASE_URL || '/'}profile.jpg`} alt="Edwin Chumba" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Hi, I’m</p>
              <h1 className="text-xl font-extrabold text-slate-950">Edwin Chumba</h1>
            </div>
          </div>

          <nav className="space-y-2">
            {items.map((item) => {
              const Icon = iconMap[item.id] || Home;
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`group flex w-full items-center gap-4 rounded-3xl px-4 py-3 text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-900/5 ring-1 ring-slate-900/10 shadow-sm'
                      : 'hover:bg-slate-100'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
                      isActive ? 'bg-gradient-to-br from-blue-600 to-pink-500 text-white shadow-lg shadow-pink-500/10' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 capitalize">{item.label}</p>
                    <span className="text-xs text-slate-500">{item.id === activeId ? 'Current section' : 'Jump section'}</span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Connect</p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/Educhumba" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-blue-500 hover:text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.495.998.108-.775.42-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 0 1 3.003-.404 11.48 11.48 0 0 1 3.003.404c2.292-1.552 3.298-1.23 3.298-1.23.654 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.92.431.37.815 1.102.815 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </a>
            <a href="#contact" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-blue-500 hover:text-white">
              <span className="text-sm font-semibold">in</span>
            </a>
          </div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed left-4 top-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/95 border border-slate-200 shadow-lg shadow-slate-300/10 xl:hidden"
        onClick={() => setIsOpen((value) => !value)}
        aria-label="Open menu"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-900">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.button>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          className="fixed inset-y-0 left-0 z-50 w-[calc(100%-2rem)] max-w-xs overflow-y-auto rounded-3xl border border-slate-200/60 bg-white/95 p-5 shadow-2xl shadow-slate-300/20 backdrop-blur-xl xl:hidden"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Edwin Chumba</p>
              <h2 className="text-xl font-extrabold text-slate-950">Portfolio</h2>
            </div>
            <button className="text-slate-700" onClick={() => setIsOpen(false)} aria-label="Close menu">
              ✕
            </button>
          </div>
          <nav className="space-y-2">
            {items.map((item) => {
              const Icon = iconMap[item.id] || Home;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left text-slate-700 transition hover:bg-slate-100"
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </motion.div>
      ) : null}
    </>
  );
}
