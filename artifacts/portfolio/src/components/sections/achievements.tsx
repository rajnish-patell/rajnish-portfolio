import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
  subText: string;
}

const STATS: StatItem[] = [
  {
    value: "5+",
    label: "Years Experience",
    subText: "Professional UI Delivery"
  },
  {
    value: "15+",
    label: "Projects Completed",
    subText: "Production Ready Applications"
  },
  {
    value: "30+",
    label: "Tech Mastered",
    subText: "React & Next.js Ecosystems"
  },
  {
    value: "1k+",
    label: "Components Built",
    subText: "Atomic Design Principles"
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    subText: "Pixel-Perfect Reviews"
  }
];

export default function Achievements() {
  return (
    <section className="py-24 relative bg-background/30 overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-40 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-serif mb-3 group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </span>
              <h4 className="text-sm font-semibold tracking-wide text-foreground mb-1 leading-tight">
                {stat.label}
              </h4>
              <span className="text-xs text-muted-foreground font-light">
                {stat.subText}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
