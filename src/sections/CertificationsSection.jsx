import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';

export default function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="section-pad border-t border-subtle">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          highlight="Credentials"
          title="Certifications, kept separate from practice"
          description="Only named credentials appear as certifications. Courses and project-based learning stay in a separate list."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h3 className="font-display text-3xl font-semibold text-cream">Certifications</h3>
            <ul className="mt-6 space-y-4">
              {certifications.credentials.map((item, index) => (
                <motion.li
                  key={`${item.issuer}-${item.credential}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="surface-card rounded-2xl p-6"
                >
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold">
                      <Award className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="label-caps">{item.issuer}</p>
                      <p className="mt-2 font-medium text-cream">{item.credential}</p>
                      {item.year ? <p className="mt-2 text-sm text-cream-muted">{item.year}</p> : null}
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex text-sm font-semibold text-gold hover:underline"
                        >
                          View credential
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-3xl font-semibold text-cream">Continuous learning</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {certifications.learning.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="surface-card flex gap-3 rounded-2xl p-5"
                >
                  <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
                  <span className="text-sm leading-relaxed text-cream">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
