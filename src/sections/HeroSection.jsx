import { motion } from 'framer-motion';
import { ArrowDown, GitBranch, Mail, MapPin } from 'lucide-react';
import Button from '../components/ui/Button.jsx';

export default function HeroSection({ data }) {
  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <section id="home" className="section-pad relative min-h-[calc(100vh-72px)] overflow-hidden">
      <div className="grain relative mx-auto max-w-6xl">
        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal-soft px-4 py-1.5 text-xs font-medium text-teal">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                {data.availability}
              </span>
              <span className="label-caps text-cream-dim">{data.role}</span>
            </div>

            <div className="space-y-4">
              <p className="font-display text-lg italic text-cream-muted sm:text-xl">Hello, I&apos;m</p>
              <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="text-cream">{data.name.split(' ')[0]}</span>
                <br />
                <span className="text-gradient-gold">{data.name.split(' ').slice(1).join(' ') || ''}</span>
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-cream sm:text-xl">{data.title}</p>
            <p className="max-w-lg text-sm leading-relaxed text-cream-muted sm:text-base">{data.subtitle}</p>

            <div className="flex flex-wrap gap-4">
              <Button href={data.actions[0].href}>{data.actions[0].label}</Button>
              <Button href={data.actions[1].href} variant="secondary" download>
                {data.actions[1].label}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-cream-muted">
              <a
                href="https://github.com/Educhumba"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-gold"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
              <a href="mailto:edudechumba6767@gmail.com" className="inline-flex items-center gap-2 transition hover:text-gold">
                <Mail className="h-4 w-4" />
                Email
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold/80" />
                Nairobi, Kenya
              </span>
            </div>

            <div className="grid gap-4 border-t border-subtle pt-8 sm:grid-cols-3">
              {data.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="rounded-xl border border-subtle bg-subtle px-5 py-4"
                >
                  <p className="font-display text-3xl font-semibold text-gold">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cream-dim">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/20 via-transparent to-teal/10 blur-2xl" />
            <div className="surface-card relative overflow-hidden rounded-2xl">
              <img
                src={`${baseUrl}profile.jpg`}
                alt="Edwin Chumba"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 project-img-overlay p-6 pt-24">
                <p className="label-caps mb-2">Focus areas</p>
                <p className="font-display text-xl leading-snug text-cream">
                  AI systems · Laravel platforms · Product-grade UI
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-dim transition hover:text-gold lg:flex"
          aria-label="Scroll to about"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
