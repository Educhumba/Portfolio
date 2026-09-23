import SectionTitle from '../components/ui/SectionTitle.jsx';
import TimelineItem from '../components/TimelineItem.jsx';

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="section-pad bg-ink-raised/30">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          highlight="Engineering journey"
          title="A path toward production engineering"
          description="The timeline marks how the work widened — from web fundamentals and data, into full-stack systems, AI, deployment, and collaborative software. It is not an employment history."
        />

        <div className="mt-14 max-w-3xl space-y-5">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.title}
              item={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
