import Navbar from './components/Navbar.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import AllProjectsSection from './sections/AllProjectsSection.jsx';
import CertificationsSection from './sections/CertificationsSection.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import { useScrollSpy } from './hooks/useScrollSpy.jsx';
import {
  navItems,
  heroData,
  aboutData,
  skillsData,
  projectsData,
  certificationsData,
  experienceData,
  contactData,
  socialLinks,
} from './data/content.js';

const sectionIds = navItems.map((item) => item.id);

export default function PortfolioDashboard() {
  const activeId = useScrollSpy(sectionIds);

  const handleNavigate = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-cream selection:bg-gold/30">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="glow-orb glow-orb-gold -left-32 top-0 h-[420px] w-[420px]" />
        <div className="glow-orb glow-orb-teal right-0 top-1/3 h-[360px] w-[360px]" />
        <div className="glow-orb glow-orb-gold bottom-0 left-1/3 h-[300px] w-[500px] opacity-60" />
      </div>

      <Navbar items={navItems} activeId={activeId} onNavigate={handleNavigate} />

      <main className="relative z-10 pt-[72px]">
        <HeroSection data={heroData} />
        <AboutSection about={aboutData} />
        <SkillsSection skills={skillsData} />
        <ProjectsSection projects={projectsData} />
        <AllProjectsSection projects={projectsData} />
        <CertificationsSection certifications={certificationsData} />
        <ExperienceSection experience={experienceData} />
        <ContactSection contact={contactData} />

        <footer className="border-t border-subtle bg-ink-raised/80 px-5 py-14 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl font-semibold text-cream">Edwin Chumba</p>
              <p className="mt-2 text-sm text-cream-muted">
                AI Engineering · Full Stack · Data Science — Nairobi, Kenya
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-cream-muted transition hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="text-sm font-medium text-cream-muted transition hover:text-gold">
                Contact
              </a>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-cream-dim">
            © {new Date().getFullYear()} Edwin Chumba. Crafted with React & Tailwind.
          </p>
        </footer>
      </main>
    </div>
  );
}
