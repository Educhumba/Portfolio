import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import Portrait from './Portrait.jsx';

export default function Navbar({ items, activeId, onNavigate, profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClick = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen ? 'surface-glass surface-glass-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3.5 sm:px-8">
        <button
          type="button"
          onClick={() => handleClick('home')}
          className="group flex min-w-0 items-center gap-3 text-left"
        >
          <Portrait alt="" className="h-10 w-10 object-cover ring-2 ring-gold/40" />
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-semibold text-cream">{profile.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-cream-dim">Portfolio</span>
          </span>
        </button>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-full px-3 py-2 text-[13px] font-medium transition ${
                  isActive ? 'text-on-accent' : 'text-cream-muted hover:text-cream'
                }`}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <div className="hidden items-center gap-2 md:flex">
            <Button
              href={profile.github}
              variant="ghost"
              className="!px-3 !py-2"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Button>
            <Button href="#contact" variant="primary" className="!px-4 !py-2.5 text-xs">
              Hire Me
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-subtle text-cream xl:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-subtle surface-glass xl:hidden"
          >
            <nav className="max-h-[calc(100vh-72px)] space-y-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
              <div className="mb-3 flex items-center justify-between sm:hidden">
                <span className="label-caps">Theme</span>
                <ThemeToggle />
              </div>
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleClick(item.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium ${
                      isActive ? 'bg-gold font-semibold text-on-accent' : 'text-cream-muted'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="flex gap-3 pt-4">
                <Button
                  href={profile.github}
                  variant="secondary"
                  className="flex-1 !py-3 text-xs"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Button>
                <Button
                  href="#contact"
                  variant="primary"
                  className="flex-1 !py-3 text-xs"
                  onClick={() => setIsOpen(false)}
                >
                  Hire Me
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
