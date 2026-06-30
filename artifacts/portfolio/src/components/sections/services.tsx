import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Terminal, Sparkles, Zap, Laptop, ShieldAlert, Cpu, Eye } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Developing scalable and interactive user interfaces from scratch using clean TypeScript structures and efficient file structures.",
    icon: <Terminal size={20} className="text-primary" />
  },
  {
    id: 2,
    title: "React & Next.js Ecosystems",
    description: "Architecting server-side rendered layouts (SSR/ISR) and client-side single-page applications, focusing on optimal data-fetching.",
    icon: <Cpu size={20} className="text-primary" />
  },
  {
    id: 3,
    title: "Vite/Next Performance Audit",
    description: "Pinpointing layout shifts (CLS), reducing asset footprints, code-splitting bundles, and reaching 95+ Core Web Vitals targets.",
    icon: <Zap size={20} className="text-primary" />
  },
  {
    id: 4,
    title: "Pixel-Perfect Implementation",
    description: "Translating sophisticated Figma brand boards and high-fidelity screens into responsive layouts conforming strictly to token rules.",
    icon: <Eye size={20} className="text-primary" />
  },
  {
    id: 5,
    title: "Custom UI Libraries",
    description: "Building atomic component collections using Tailwind CSS utility rules, Radix primitives, and accessible design principles.",
    icon: <Layers size={20} className="text-primary" />
  },
  {
    id: 6,
    title: "Accessibility Compliance Audits",
    description: "Optimizing DOM elements to follow WCAG AA criteria, implementing focus traps, aria attributes, and keyboard controls.",
    icon: <ShieldCheck size={20} className="text-primary" />
  }
];

// Custom import helper in case ShieldCheck was referenced
import { ShieldCheck } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-background/50">
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 text-left max-w-3xl">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Services</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Engineering Solutions.
          </h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Delivering high-quality frontend architectures tailored for speed, scale, and optimal user experiences.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel p-8 rounded-3xl glow-border flex flex-col justify-between hover:border-primary/20 transition-all duration-500 group relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold text-foreground mb-3 font-serif group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>

                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 border-t border-white/5 pt-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                <span>0{service.id} / SERVICE</span>
                <Sparkles size={10} className="text-primary/50" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
