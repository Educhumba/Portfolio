import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import Button from '../components/ui/Button.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

export default function ProjectsSection({ projects }) {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="section-pad border-t border-subtle">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            highlight="Selected work"
            title="Web platforms, business systems, AI, and data"
            description="A balanced set of live websites, Laravel applications, intelligent systems, and analytical tools. Full-stack web work is presented with the same weight as AI."
          />
          <Button href="#library" variant="secondary" className="shrink-0 self-start">
            Full library
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
