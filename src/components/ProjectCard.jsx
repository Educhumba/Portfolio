import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import SkillBadge from './ui/SkillBadge.jsx';

const MAX_STACK_TAGS = 4;

export default function ProjectCard({ project, index = 0 }) {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const visibleStack = project.stack.slice(0, MAX_STACK_TAGS);
  const hiddenStackCount = project.stack.length - MAX_STACK_TAGS;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.15 }}
      className="group surface-card flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl transition duration-500 hover:border-gold/20"
    >
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-ink-raised">
        <img
          src={`${baseUrl}${project.previewImage}`}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.featured ? (
            <span className="rounded-full bg-gold/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-on-accent">
              Featured
            </span>
          ) : null}
          {project.category ? (
            <span className="rounded-full border border-subtle bg-ink/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream backdrop-blur-sm">
              {project.category}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="line-clamp-2 min-h-[3.25rem] font-display text-xl font-semibold leading-snug text-cream">
            {project.title}
          </h3>
          <p
            className="line-clamp-3 min-h-[4.25rem] text-sm leading-relaxed text-cream-muted"
            title={project.description}
          >
            {project.description}
          </p>
        </div>

        <div className="flex min-h-[2rem] flex-wrap gap-2">
          {visibleStack.map((tech) => (
            <SkillBadge key={tech}>{tech}</SkillBadge>
          ))}
          {hiddenStackCount > 0 ? <SkillBadge>+{hiddenStackCount}</SkillBadge> : null}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 border-t border-subtle pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-on-accent transition hover:bg-[#e0b45f]"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-subtle px-5 py-2.5 text-sm font-semibold text-cream transition hover:border-gold/25 hover:bg-subtle"
            >
              <GitBranch className="h-4 w-4" />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
