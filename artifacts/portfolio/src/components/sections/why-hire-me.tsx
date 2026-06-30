import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PackageCheck, Zap, Users, Compass, GitMerge } from 'lucide-react';

interface ReasonItem {
  title: string;
  subTitle: string;
  description: string;
  icon: React.ReactNode;
}

const REASONS: ReasonItem[] = [
  {
    title: "Clean Code Architect",
    subTitle: "Structure & Types",
    description: "I write strict, type-safe TypeScript. Adhering to SOLID guidelines, DRY principles, and self-documenting code systems that keep codebases readable.",
    icon: <Code2 size={20} className="text-primary" />
  },
  {
    title: "Atomic Design Philosophy",
    subTitle: "Reusable Components",
    description: "Designing components starting from primitive design tokens to construct scalable frontend layouts. Cuts developer turnaround times by 30%.",
    icon: <PackageCheck size={20} className="text-primary" />
  },
  {
    title: "Performance Champion",
    subTitle: "95+ Mobile Lighthouse",
    description: "Obsessed with page loading speeds. I optimize dynamic images, build lazy rendering pipelines, and control asset size bloat to keep apps performant.",
    icon: <Zap size={20} className="text-primary" />
  },
  {
    title: "Inclusivity Standards",
    subTitle: "100% WCAG Compliance",
    description: "Implementing appropriate semantic landmarks, ARIA properties, focus control logic, and keyboard bindings. Web applications should belong to all users.",
    icon: <Compass size={20} className="text-primary" />
  },
  {
    title: "Responsive Fluidity",
    subTitle: "Cross-Device Stability",
    description: "Creating responsive, custom break-point styles ensuring pixel-perfection from compact mobile screens up to wide screen monitors.",
    icon: <GitMerge size={20} className="text-primary" />
  },
  {
    title: "Agile & Team Synergy",
    subTitle: "Collaboration & Scale",
    description: "Coordinating pull request reviews, branches using strict Git conventions, and milestones inside Jira/Trello boards within active sprints.",
    icon: <Users size={20} className="text-primary" />
  }
];

export default function WhyHireMe() {
  return (
    <section id="why-hire" className="py-32 relative bg-background">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 text-left max-w-3xl">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Value Add</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Why Partner With Me.
          </h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Combining rigorous frontend engineering conventions with modern UI design principles to create clean, responsive digital products.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel p-8 rounded-3xl glow-border flex flex-col justify-between hover:border-primary/20 transition-all duration-500 group relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {item.subTitle}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-foreground mb-3 font-serif group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>

                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
