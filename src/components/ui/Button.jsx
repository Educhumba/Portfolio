import { motion } from 'framer-motion';

const variants = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-on-accent shadow-[0_8px_32px_-8px_rgba(212,168,83,0.55)] hover:bg-[#e0b45f] hover:shadow-[0_12px_40px_-8px_rgba(212,168,83,0.65)]',
  secondary:
    'inline-flex items-center justify-center gap-2 rounded-full border border-subtle bg-subtle px-6 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm hover:border-gold/25 hover:bg-subtle-hover',
  ghost:
    'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-cream-muted transition hover:text-cream',
};

export default function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      type={type}
      className={`${variants[variant] ?? variants.primary} transition-all duration-300 ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
}
