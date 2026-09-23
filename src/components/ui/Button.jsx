import { motion } from 'framer-motion';

const variants = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-on-accent shadow-[0_8px_24px_-12px_rgba(184,134,46,0.7)] hover:brightness-110',
  secondary:
    'inline-flex items-center justify-center gap-2 rounded-full border border-subtle bg-subtle px-6 py-3.5 text-sm font-semibold text-cream hover:border-gold/30 hover:bg-subtle-hover',
  ghost:
    'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-cream-muted hover:text-cream',
};

export default function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const classNames = `${variants[variant] ?? variants.primary} transition duration-300 ${className}`;
  const motionProps = {
    className: classNames,
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
