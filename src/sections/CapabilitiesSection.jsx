import { motion } from 'framer-motion';
import { Brain, Building2, Globe, LineChart, Search, Server } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';

const iconMap = {
  ai: Brain,
  web: Globe,
  business: Building2,
  data: LineChart,
  infra: Server,
  seo: Search,
};

export default function CapabilitiesSection({ capabilities }) {
  return (
    <section className="section-pad border-t border-subtle">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          highlight="What I build"
          title="Six areas of engineering work"
          description="Capabilities across intelligent systems, production web applications, organizational software, data, deployment, and search-friendly digital delivery."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = iconMap[item.icon] || Globe;
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.05 }}
                className="elevate-card surface-card flex h-full flex-col rounded-2xl p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-3xl text-gold">{item.number}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-muted">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
