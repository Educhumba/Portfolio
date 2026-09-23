import { motion } from 'framer-motion';
import { ArrowDown, GitBranch, Mail, MapPin } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import Portrait from '../components/Portrait.jsx';
import { assetUrl } from '../utils/assets.js';

export default function HeroSection({ data, profile }) {
  return (
    <section id="home" className="section-pad relative min-h-[calc(100vh-72px)] overflow-hidden">
      <div className="grain relative mx-auto max-w-7xl">
        <div className="relative z-10 grid w-full min-w-0 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="min-w-0 space-y-8"
          >
            <div className="flex max-w-full flex-wrap items-center gap-3">
              <span className="inline-flex max-w-full items-start gap-2 rounded-full border border-teal/30 bg-teal-soft px-4 py-1.5 text-xs font-medium leading-relaxed text-teal">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-teal motion-reduce:animate-none" />
                <span>{data.availability}</span>
              </span>
            </div>

            <div className="space-y-5">
              <p className="max-w-full text-sm font-medium leading-relaxed text-gold sm:text-base">{data.role}</p>
              <h1 className="font-display text-6xl font-semibold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
                <span className="text-cream">{data.name.split(' ')[0]}</span>
                <br />
                <span className="text-gradient-gold">{data.name.split(' ').slice(1).join(' ')}</span>
              </h1>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-cream sm:text-xl">{data.title}</p>
            <p className="max-w-2xl text-sm leading-relaxed text-cream-muted sm:text-base">{data.subtitle}</p>
            <p className="font-display text-xl italic text-gold">{data.capabilityLine}</p>

            <div className="flex max-w-full flex-wrap gap-3">
              {data.actions.map((action) => (
                <Button
                  key={action.label}
                  href={action.download ? assetUrl(action.href) : action.href}
                  variant={action.variant}
                  download={action.download ? 'Edwin_Chumba_CV.pdf' : undefined}
                >
                  {action.label}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-cream-muted">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full transition hover:text-gold"
              >
                <GitBranch className="h-4 w-4" aria-hidden />
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full transition hover:text-gold">
                <Mail className="h-4 w-4" aria-hidden />
                Email
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" aria-hidden />
                {profile.location}
              </span>
            </div>

            <ul className="grid grid-cols-2 gap-3 border-t border-subtle pt-8">
              {data.stats.map((stat, index) => (
                <motion.li
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="rounded-xl border border-subtle bg-subtle px-4 py-4"
                >
                  <p className="font-display text-2xl font-semibold text-gold">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cream-dim">{stat.label}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative mx-auto w-full min-w-0 max-w-full lg:max-w-none"
          >
            <div className="surface-card relative overflow-hidden rounded-2xl">
              <Portrait alt="Edwin Chumba" rounded="" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 project-img-overlay p-6 pt-24">
                <p className="label-caps mb-2">Practice</p>
                <p className="font-display text-2xl leading-snug text-cream">{data.portraitCaption}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 hidden flex-col items-center gap-2 text-cream-dim transition hover:text-gold lg:flex"
          aria-label="Scroll to about"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" />
        </motion.a>
      </div>
    </section>
  );
}
