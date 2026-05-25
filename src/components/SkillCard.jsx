import { motion } from 'framer-motion';
import { Zap, Code2, Cpu, Layers } from 'lucide-react';
import SkillBadge from './ui/SkillBadge.jsx';

const badgeIconMap = {
  'Languages & Backend': Code2,
  'Frontend & UI': Layers,
  'Data & AI': Cpu,
  'Tools & DevOps': Zap,
};

export default function SkillCard({ skill, index = 0 }) {
  const Icon = badgeIconMap[skill.title] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.2 }}
      className="surface-card group rounded-2xl p-6 transition hover:border-teal/20"
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-cream">{skill.title}</h3>
          <p className="text-xs text-cream-dim">Production stack</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <SkillBadge key={item}>{item}</SkillBadge>
        ))}
      </div>
    </motion.div>
  );
}
