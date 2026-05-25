import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';

export default function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="section-pad border-t border-subtle">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          highlight="Learning"
          title="Certifications & continuous growth"
          description="Formal training and hands-on practice that reinforce delivery quality."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="surface-card flex gap-4 rounded-2xl p-6 transition hover:border-gold/15"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-cream">{cert}</h3>
                <p className="mt-2 text-xs leading-relaxed text-cream-dim">
                  Applied through projects and production-style workflows.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
