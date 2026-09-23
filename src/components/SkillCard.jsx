import { motion } from 'framer-motion';
import { Brain, Code2, Database, Globe, LineChart, Search, Server, Workflow } from 'lucide-react';
import SkillBadge from './ui/SkillBadge.jsx';

const iconMap = {
  code: Code2,
  frontend: Globe,
  backend: Workflow,
  data: LineChart,
  ai: Brain,
  database: Database,
  infra: Server,
  seo: Search,
};

export default function SkillCard({ skill, index = 0 }) {
  const Icon = iconMap[skill.icon] || Code2;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.04 }}
      viewport={{ once: true, amount: 0.15 }}
      className={`surface-card skill-card rounded-2xl p-6 ${skill.core ? 'skill-card-core' : ''}`}
    >
      <div className="mb-5 flex items-center gap-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            skill.core ? 'bg-gold-soft text-gold' : 'bg-teal-soft text-teal'
          }`}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold text-cream">{skill.title}</h3>
          {skill.core ? <p className="text-xs uppercase tracking-[0.18em] text-gold">Primary practice</p> : null}
        </div>
      </div>

      <ul className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <li key={item.name}>
            <SkillBadge strong={item.strong}>{item.name}</SkillBadge>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
