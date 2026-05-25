import SectionTitle from '../components/ui/SectionTitle.jsx';
import SkillCard from '../components/SkillCard.jsx';

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          highlight="Expertise"
          title="Skills that ship real products"
          description="From Laravel marketplaces and React frontends to LangChain assistants and ML pipelines."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
