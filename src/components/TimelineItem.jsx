export default function TimelineItem({ item, isLast }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-6 flex h-3 w-3 rounded-full bg-gold shadow-[0_0_12px_rgba(212,168,83,0.5)] ring-4 ring-ink" />
      {!isLast ? <div className="absolute left-[5px] top-9 h-[calc(100%+0.5rem)] w-px bg-subtle-hover" /> : null}
      <div className="surface-card rounded-2xl p-6 sm:p-7">
        <span className="label-caps text-gold">{item.period}</span>
        <h3 className="mt-3 font-display text-xl font-semibold text-cream sm:text-2xl">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-cream-muted">{item.description}</p>
      </div>
    </div>
  );
}
