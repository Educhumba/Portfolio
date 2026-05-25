import { motion } from 'framer-motion';

export default function SectionTitle({ title, highlight, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}
    >
      <span className="label-caps inline-flex w-fit items-center gap-2">
        <span className="h-px w-8 bg-gold/60" aria-hidden />
        {highlight}
      </span>
      <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-[3.25rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-cream-muted sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
