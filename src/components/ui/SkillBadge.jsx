export default function SkillBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-subtle bg-subtle px-3 py-1.5 text-xs font-medium text-cream-muted transition hover:border-gold/25 hover:text-cream">
      {children}
    </span>
  );
}
