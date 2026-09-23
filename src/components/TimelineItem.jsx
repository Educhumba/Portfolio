import { motion } from 'framer-motion';

export default function TimelineItem({ item, index = 0, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.04 }}
      className="relative pl-10"
    >
      <span className="absolute left-0 top-7 h-3 w-3 rounded-full bg-gold ring-4 ring-ink" />
      {!isLast ? <div className="absolute bottom-0 left-[5px] top-10 w-px bg-[var(--border-subtle)]" /> : null}
      <article className="surface-card rounded-2xl p-6 sm:p-7">
        <p className="label-caps text-gold">{item.period}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-cream">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-cream-muted">{item.description}</p>
      </article>
    </motion.div>
  );
}
