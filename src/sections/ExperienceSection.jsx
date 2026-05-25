import SectionTitle from '../components/ui/SectionTitle.jsx';
import TimelineItem from '../components/TimelineItem.jsx';

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="section-pad bg-ink-raised/30">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          highlight="Journey"
          title="How my craft has evolved"
          description="From web fundamentals to data, full-stack products, and AI — each step built on the last."
        />

        <div className="mt-14 space-y-6">
          {experience.map((item, index) => (
            <TimelineItem key={item.title} item={item} isLast={index === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
