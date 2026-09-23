import { useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import CapabilitiesSection from './sections/CapabilitiesSection.jsx';
import EngineeringSection from './sections/EngineeringSection.jsx';
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
  capabilitiesData,
  engineeringData,
  skillsData,
  projectsData,
  certificationsData,
  experienceData,
  contactData,
  profile,
  githubNote,
  getVisibleSocialLinks,
} from './data/content.js';

export default function PortfolioDashboard() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useScrollSpy(sectionIds);
  const socialLinks = getVisibleSocialLinks(profile);

  const handleNavigate = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-cream selection:bg-gold/30">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-accent"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="glow-orb glow-orb-gold -left-32 top-0 h-[420px] w-[420px]" />
        <div className="glow-orb glow-orb-teal right-0 top-1/3 h-[360px] w-[360px]" />
        <div className="glow-orb glow-orb-gold bottom-0 left-1/3 h-[280px] w-[480px] opacity-70" />
      </div>

      <Navbar items={navItems} activeId={activeId} onNavigate={handleNavigate} profile={profile} />

      <main id="main-content" className="relative z-10 pt-[72px]">
        <HeroSection data={heroData} profile={profile} />
        <AboutSection about={aboutData} />
        <div id="expertise">
          <CapabilitiesSection capabilities={capabilitiesData} />
          <EngineeringSection tracks={engineeringData} />
        </div>
        <SkillsSection skills={skillsData} />
        <div id="work">
          <ProjectsSection projects={projectsData} />
          <AllProjectsSection projects={projectsData} githubNote={githubNote} githubUrl={profile.github} />
        </div>
        <ExperienceSection experience={experienceData} />
        <CertificationsSection certifications={certificationsData} />
        <ContactSection contact={contactData} profile={profile} socialLinks={socialLinks} />

        <footer className="border-t border-subtle bg-ink-raised/80 px-5 py-14 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-3xl font-semibold text-cream">{profile.name}</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-cream-muted">{profile.role}</p>
              <p className="mt-1 text-sm text-cream-dim">{profile.location}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
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
          <p className="mx-auto mt-8 max-w-7xl text-sm leading-relaxed text-cream-dim">{githubNote}</p>
          <p className="mx-auto mt-6 max-w-7xl text-xs text-cream-dim">
            © {new Date().getFullYear()} {profile.name}.
          </p>
        </footer>
      </main>
    </div>
  );
}
