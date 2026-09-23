import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle.jsx';

export default function EngineeringSection({ tracks }) {
  return (
    <section className="section-pad border-t border-subtle bg-ink-raised/40">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          highlight="Engineering expertise"
          title="Responsibility across the product path"
          description="What I can take from a brief through to a running, findable system — web engineering included at the same depth as AI."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {tracks.map((track, index) => (
            <motion.article
              key={track.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: Math.min(index, 4) * 0.05 }}
              className={`surface-card rounded-2xl p-6 ${index === tracks.length - 1 ? 'md:col-span-2' : ''}`}
            >
              <h3 className="font-display text-2xl font-semibold text-cream">{track.title}</h3>
              <ol className="mt-5 flex flex-wrap items-center gap-2">
                {track.steps.map((step, stepIndex) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-subtle bg-subtle px-3 py-1.5 text-xs font-medium text-cream">
                      {step}
                    </span>
                    {stepIndex < track.steps.length - 1 ? (
                      <span className="text-gold" aria-hidden>
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
