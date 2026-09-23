import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import SkillBadge from './ui/SkillBadge.jsx';
import { assetUrl } from '../utils/assets.js';

const MAX_STACK_TAGS = 5;

export default function ProjectCard({ project, index = 0 }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(project.image) && !imageFailed;
  const technologies = project.technologies || [];
  const visibleStack = technologies.slice(0, MAX_STACK_TAGS);
  const hiddenStackCount = technologies.length - visibleStack.length;
  const meta = [project.role, project.type, project.status].filter(Boolean);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index, 6) * 0.05 }}
      viewport={{ once: true, amount: 0.15 }}
      className="project-card elevate-card surface-card group flex h-full flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-ink-raised">
        {showImage ? (
          <img
            src={assetUrl(project.image)}
            alt={`${project.title} preview`}
            className="project-media h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="project-media flex h-full flex-col justify-end bg-gradient-to-br from-gold-soft via-ink-card to-teal-soft p-6 transition duration-700 group-hover:scale-[1.03]">
            <span className="mb-4 h-px w-16 bg-gold/70" aria-hidden />
            <span className="label-caps text-gold">{project.type || 'Project'}</span>
          </div>
        )}
        <div className="absolute left-4 top-4 z-[1] flex max-w-[calc(100%-2rem)] flex-wrap gap-2">
          {project.featured ? (
            <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-on-accent">
              {project.featuredLabel || 'Featured'}
            </span>
          ) : null}
          {project.category ? (
            <span className="rounded-full border border-subtle bg-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream backdrop-blur-sm">
              {project.category}
            </span>
          ) : null}
        </div>
        {project.number ? (
          <span className="absolute bottom-4 right-4 z-[1] rounded-full bg-ink/75 px-3 py-1 font-display text-sm tracking-[0.18em] text-cream">
            {project.number}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-semibold leading-snug text-cream">{project.title}</h3>
          <p className="text-sm leading-relaxed text-cream-muted">{project.description}</p>
        </div>

        {meta.length > 0 ? (
          <dl className="grid grid-cols-1 gap-2 text-xs text-cream-muted sm:grid-cols-3">
            {project.role ? (
              <div className="min-w-0">
                <dt className="text-[10px] uppercase tracking-wider text-cream-dim">Role</dt>
                <dd className="mt-1 font-medium text-cream">{project.role}</dd>
              </div>
            ) : null}
            {project.type ? (
              <div className="min-w-0">
                <dt className="text-[10px] uppercase tracking-wider text-cream-dim">Type</dt>
                <dd className="mt-1 font-medium text-cream">{project.type}</dd>
              </div>
            ) : null}
            {project.status ? (
              <div className="min-w-0">
                <dt className="text-[10px] uppercase tracking-wider text-cream-dim">Status</dt>
                <dd className="mt-1 font-medium text-cream">{project.status}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {project.longDescription ? (
          <details className="rounded-xl border border-subtle bg-subtle px-4 py-3 text-sm text-cream-muted">
            <summary className="cursor-pointer font-medium text-cream focus-visible:outline-none">
              Project notes
            </summary>
            <p className="mt-3 leading-relaxed">{project.longDescription}</p>
          </details>
        ) : null}

        {visibleStack.length > 0 ? (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {visibleStack.map((tech) => (
              <li key={tech}>
                <SkillBadge>{tech}</SkillBadge>
              </li>
            ))}
            {hiddenStackCount > 0 ? (
              <li>
                <SkillBadge>+{hiddenStackCount}</SkillBadge>
              </li>
            ) : null}
          </ul>
        ) : null}

        {project.liveUrl || project.githubUrl ? (
          <div className="mt-auto flex flex-wrap gap-3 border-t border-subtle pt-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-on-accent transition hover:brightness-110"
              >
                Live site
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-subtle px-5 py-2.5 text-sm font-semibold text-cream transition hover:border-gold/30 hover:bg-subtle"
              >
                <GitBranch className="h-4 w-4" aria-hidden />
                GitHub
              </a>
            ) : null}
          </div>
        ) : (
          <p className="mt-auto border-t border-subtle pt-4 text-xs leading-relaxed text-cream-dim">
            No public repository or live URL is listed for this work.
          </p>
        )}
      </div>
    </motion.article>
  );
}
