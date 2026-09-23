import { motion } from 'framer-motion';
import { Brain, Globe, Server } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';

const iconMap = {
  ai: Brain,
  web: Globe,
  infra: Server,
};

export default function AboutSection({ about }) {
  return (
    <section id="about" className="section-pad border-t border-subtle bg-ink-raised/50">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          highlight="About"
          title="From individual technologies to complete systems"
          description="Software engineering, AI, data, web platforms, and the production work required to keep them online."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card rounded-2xl p-8 sm:p-10"
          >
            <p className="text-base leading-8 text-cream-muted sm:text-lg">{about.description}</p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card rounded-2xl p-8 sm:p-10"
          >
            <p className="label-caps">Education</p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-cream">
              {about.education.degree}
            </h3>
            <p className="mt-4 text-base text-cream">{about.education.school}</p>
            <p className="mt-2 text-sm leading-relaxed text-cream-muted">
              Specialization: {about.education.specialization}
            </p>
          </motion.article>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {about.highlights.map((item, index) => {
            const Icon = iconMap[item.icon] || Globe;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="elevate-card surface-card rounded-2xl p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-gold">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-muted">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
