import SectionTitle from '../components/ui/SectionTitle.jsx';
import SkillCard from '../components/SkillCard.jsx';

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          highlight="Skills"
          title="An engineering stack, with a clear center of gravity"
          description="Programming, frontend, backend, and data work carry the most weight. Infrastructure and digital engineering support how those systems reach production."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
