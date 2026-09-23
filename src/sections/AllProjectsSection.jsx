import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projectFilters } from '../data/content.js';

export default function AllProjectsSection({ projects, githubNote, githubUrl }) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const categories = project.categories || [];
      const matchesCategory = selectedCategory === 'All' || categories.includes(selectedCategory);
      const haystack = [
        project.title,
        project.description,
        project.longDescription,
        project.type,
        project.role,
        project.status,
        ...categories,
        ...(project.technologies || []),
      ]
        .join(' ')
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [projects, query, selectedCategory]);

  return (
    <section id="library" className="section-pad bg-ink-raised/40">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          highlight="Project library"
          title="Filter the work by discipline"
          description="One project can sit in more than one category. Private and collaborative systems stay in the library without invented repository links."
        />

        <div className="mt-10 flex flex-col gap-4">
          <div className="relative max-w-xl">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-dim" aria-hidden />
            <input
              id="project-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, stack, or type"
              className="input-field rounded-full py-3.5 pl-12 pr-4"
            />
          </div>

          <label className="max-w-xs text-sm text-cream-muted sm:hidden">
            <span className="mb-2 block text-xs uppercase tracking-wider">Category</span>
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="input-field"
            >
              {projectFilters.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <div className="hidden flex-wrap gap-2 sm:flex" role="group" aria-label="Project categories">
            {projectFilters.map((category) => {
              const selected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selected
                      ? 'bg-gold text-on-accent'
                      : 'border border-subtle bg-subtle text-cream-muted hover:text-cream'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))
          ) : (
            <p className="col-span-full rounded-2xl border border-subtle bg-ink-card p-12 text-center text-cream-muted">
              No projects match that search. Try another keyword or category.
            </p>
          )}
        </div>

        <div className="mt-12 rounded-2xl border border-gold/25 bg-gold-soft p-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <p className="label-caps text-gold">GitHub</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-cream">{githubNote}</p>
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-on-accent transition hover:brightness-110 sm:mt-0"
          >
            github.com/Educhumba
          </a>
        </div>
      </div>
    </section>
  );
}
