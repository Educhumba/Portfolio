import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import Button from '../components/ui/Button.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

export default function ProjectsSection({ projects }) {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="featured-projects" className="section-pad border-t border-subtle">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            highlight="Selected work"
            title="Products built for real users"
            description="Marketplaces, AI assistants, and full-stack platforms — each with live demos where available."
          />
          <Button href="#projects" variant="secondary" className="shrink-0 self-start sm:self-auto">
            All projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold/20 bg-gold-soft p-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="label-caps text-gold">Full archive</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-cream">
              {projects.length} projects — search & filter below
            </h3>
          </div>
          <Button href="#projects" variant="primary">
            Browse library
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
