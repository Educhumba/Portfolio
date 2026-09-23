import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const idsKey = sectionIds.join('|');

  useEffect(() => {
    const ids = idsKey.split('|').filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          setActiveId(visibleSection.target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.05, 0.15, 0.4] }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [idsKey]);

  return activeId;
}
