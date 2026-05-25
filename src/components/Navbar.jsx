import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button.jsx';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar({ items, activeId, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const baseUrl = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'surface-glass surface-glass-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => handleClick('home')}
          className="group flex items-center gap-3 text-left"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-gold/30 ring-offset-2 ring-offset-ink transition group-hover:ring-gold/60">
            <img src={`${baseUrl}profile.jpg`} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="hidden min-w-0 sm:block">
            <p className="text-sm font-semibold text-cream">Edwin Chumba</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-cream-dim">Portfolio</p>
          </div>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition ${
                activeId === item.id ? 'text-on-accent' : 'text-cream-muted hover:text-cream'
              }`}
            >
              {item.label}
              {activeId === item.id ? (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gold shadow-[0_4px_16px_-4px_rgba(212,168,83,0.5)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              ) : null}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <div className="hidden items-center gap-3 md:flex">
            <Button href="https://github.com/Educhumba" variant="ghost" className="!px-3 !py-2">
              GitHub
            </Button>
            <Button href="#contact" variant="primary" className="!px-5 !py-2.5 text-xs">
              Hire me
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-subtle text-cream lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-subtle surface-glass lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              <div className="mb-3 flex items-center justify-between sm:hidden">
                <span className="label-caps">Theme</span>
                <ThemeToggle />
              </div>
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium ${
                    activeId === item.id ? 'bg-gold font-semibold text-on-accent' : 'text-cream-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-3 pt-4">
                <Button href="https://github.com/Educhumba" variant="secondary" className="flex-1 !py-3 text-xs">
                  GitHub
                </Button>
                <Button href="#contact" variant="primary" className="flex-1 !py-3 text-xs">
                  Hire me
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
