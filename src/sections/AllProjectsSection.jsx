import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

export default function AllProjectsSection({ projects }) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category || 'Other'))],
    [projects]
  );

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        !normalizedQuery ||
        [project.title, project.description, project.category, ...(project.stack || [])]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [projects, query, selectedCategory]);

  return (
    <section id="projects" className="section-pad bg-ink-raised/40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          highlight="Portfolio"
          title="Every project, one place"
          description="Filter by discipline or search by stack — open live demos to evaluate the work firsthand."
        />

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-dim" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, stack, or category..."
              className="input-field rounded-full py-3.5 pl-12 pr-4"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === category
                    ? 'bg-gold text-on-accent'
                    : 'border border-subtle bg-subtle text-cream-muted hover:text-cream'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-subtle bg-ink-card p-12 text-center text-cream-muted">
              No projects match your search. Try another keyword or category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
