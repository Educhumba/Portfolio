import { motion } from 'framer-motion';
import { Database, Globe, Sparkles } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';

const iconMap = {
  'AI Engineering': Sparkles,
  'Modern Web': Globe,
  'Data Science': Database,
};

export default function AboutSection({ about }) {
  return (
    <section id="about" className="section-pad border-t border-subtle bg-ink-raised/50">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          highlight="About"
          title="Engineering with clarity, craft, and business impact"
          description="I bridge product thinking and technical depth — shipping interfaces people trust and backends that scale."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card rounded-2xl p-8 sm:p-10"
          >
            <p className="text-base leading-8 text-cream-muted sm:text-lg">{about.description}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-subtle bg-subtle p-5 text-center"
                >
                  <p className="font-display text-3xl font-semibold text-gold">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-cream-dim">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {about.highlights.map((item, index) => {
              const Icon = iconMap[item.title] || Globe;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group surface-card flex gap-5 rounded-2xl p-6 transition hover:border-gold/15"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-cream">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream-muted">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
