export default function SkillBadge({ children, strong = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs transition ${
        strong
          ? 'border-gold/40 bg-gold-soft font-semibold text-cream'
          : 'border-subtle bg-subtle font-medium text-cream-muted'
      }`}
    >
      {children}
    </span>
  );
}
