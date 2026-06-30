import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Codepen, Palette, Database, Zap, ShieldCheck, Settings, Sparkles, Send } from 'lucide-react';

interface SkillGroup {
  category: string;
  proficiency: number;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

const PREMIUM_SKILLS: SkillGroup[] = [
  {
    category: "Frontend Core",
    proficiency: 95,
    icon: <Layout size={20} className="text-primary" />,
    description: "Semantic structures, ES6+ architecture, and cross-device responsive logic.",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "jQuery", "UI/UX Layouts"]
  },
  {
    category: "React Ecosystem",
    proficiency: 92,
    icon: <Codepen size={20} className="text-primary" />,
    description: "Component lifecycle, state flows, SSR/ISR hydration pipelines.",
    items: ["React.js", "Next.js", "Hooks", "Component Architecture", "Vite Configs"]
  },
  {
    category: "Styling & Layout",
    proficiency: 95,
    icon: <Palette size={20} className="text-primary" />,
    description: "Utility systems, preprocessors, and modern layouts design standards.",
    items: ["Tailwind CSS", "SCSS / SCSS Grid", "Bootstrap 5", "BEM Conventions", "Adaptive Design"]
  },
  {
    category: "State Management",
    proficiency: 88,
    icon: <Database size={20} className="text-primary" />,
    description: "Caching frameworks, asynchronous calls, global store coordination.",
    items: ["React Query", "Redux", "Redux Toolkit", "Context API"]
  },
  {
    category: "Performance Metrics",
    proficiency: 90,
    icon: <Zap size={20} className="text-primary" />,
    description: "Asset footprint tuning, paint latency, and viewport optimizations.",
    items: ["Core Web Vitals", "Lazy Rendering", "Image compression", "Bundle Footprint Optimization"]
  },
  {
    category: "Testing & Compliance",
    proficiency: 85,
    icon: <ShieldCheck size={20} className="text-primary" />,
    description: "Ensuring cross-browser stability and WCAG accessibility inclusion.",
    items: ["WCAG AA Standards", "Cross-Browser QA", "Semantic Accessibility", "ESLint / Prettier"]
  },
  {
    category: "Build Tools & Bundlers",
    proficiency: 90,
    icon: <Settings size={20} className="text-primary" />,
    description: "Dev builds pipelines, bundle optimization, package dependencies.",
    items: ["Webpack", "Vite", "Babel", "npm / Yarn / pnpm"]
  },
  {
    category: "Animations",
    proficiency: 85,
    icon: <Sparkles size={20} className="text-primary" />,
    description: "Fluid micro-interactions, spring physics, dynamic layouts.",
    items: ["Framer Motion", "CSS keyframes", "Canvas transitions", "Interactive loaders"]
  },
  {
    category: "Workflows & Deployment",
    proficiency: 90,
    icon: <Send size={20} className="text-primary" />,
    description: "Continuous deployment builds, version tracking, collaboration processes.",
    items: ["Git / GitHub Workflows", "Vercel Deployments", "Jira & Trello", "Agile / Scrum Methodologies"]
  }
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 relative bg-background">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 text-left max-w-3xl">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Technical Competencies & Standards.
          </h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            A specialized stack focused on performance, accessibility compliance, and robust React architectures. Hover over cards to explore specific tools.
          </p>
        </div>

        {/* Premium Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PREMIUM_SKILLS.map((group, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="glass-panel p-6 sm:p-8 rounded-3xl glow-border flex flex-col justify-between h-full hover:border-primary/30 transition-all duration-500 cursor-default relative overflow-hidden group"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {group.icon}
                    </div>
                    <span className="text-xs font-mono font-semibold text-primary/70 bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-full">
                      {group.proficiency}%
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {group.category}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8">
                    {group.description}
                  </p>
                </div>

                {/* Tags and Progress Bar Area */}
                <div>
                  {/* Technology tag bubbles */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium text-foreground/80 px-2.5 py-1 bg-white/5 border border-white/5 rounded-md hover:border-primary/20 hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Level slider visualization */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      <span>Proficiency Level</span>
                      <span>{isHovered ? 'Mastery' : 'Expert'}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${group.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/40 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
