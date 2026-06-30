import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const EXPERIENCE = [
  {
    role: "Senior Frontend Developer",
    company: "TechNova Solutions",
    period: "Jan 2023 – Present",
    description: "Led a team of 4 building a Next.js SaaS dashboard. Architected the core component library and state management approach, resulting in a 40% performance improvement across key user flows.",
    tech: ["Next.js", "TypeScript", "React Query", "Tailwind CSS"]
  },
  {
    role: "Frontend Developer",
    company: "InnovateTech",
    period: "Jun 2021 – Dec 2022",
    description: "Built and deployed 15+ complex React features for a high-traffic consumer application. Implemented dynamic code splitting and optimized assets, reducing initial bundle size by 30%.",
    tech: ["React", "Redux", "GraphQL", "Styled Components"]
  },
  {
    role: "Junior Frontend Developer",
    company: "WebCraft Agency",
    period: "Jul 2020 – May 2021",
    description: "Developed responsive, accessible landing pages and modular UI components from Figma designs. Collaborated closely with designers to ensure pixel-perfect implementation.",
    tech: ["React", "JavaScript", "CSS3", "Figma"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Career</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Experience.</h3>
        </div>

        <div className="max-w-3xl relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-px bg-border md:left-[19px]"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-background border border-border group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(198,248,34,0.3)] transition-all z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors"></div>
                </div>

                <div className="glass-panel p-6 md:p-8 rounded-2xl glow-border border-white/5 transition-all group-hover:border-white/10 group-hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-primary font-medium mt-1">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(tech => (
                      <span key={tech} className="text-xs font-medium text-foreground/70 px-2 py-1 bg-white/5 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
