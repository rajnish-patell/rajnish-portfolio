import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Github, ExternalLink, Activity, ShoppingCart, CheckSquare } from 'lucide-react';

const PROJECTS = [
  {
    id: "devboard",
    title: "DevBoard",
    description: "Real-time developer dashboard tracking GitHub activity, pull requests, and code metrics in one unified view.",
    tech: ["Next.js", "TypeScript", "React Query", "Tailwind CSS"],
    icon: <Activity size={24} className="text-primary" />,
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: "shopflow",
    title: "ShopFlow",
    description: "Full-featured e-commerce UI with complex cart state, seamless checkout flow, and instantaneous product filtering.",
    tech: ["React", "Redux Toolkit", "Framer Motion", "Stripe.js"],
    icon: <ShoppingCart size={24} className="text-primary" />,
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: "notivio",
    title: "Notivio",
    description: "Productivity app for managing tasks, notes, and reminders. Built offline-first as a PWA with robust local state.",
    tech: ["Next.js", "IndexedDB", "PWA", "Zustand"],
    icon: <CheckSquare size={24} className="text-primary" />,
    github: "https://github.com",
    live: "https://example.com"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background/50">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Selected Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects.</h3>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground font-medium flex items-center gap-2 transition-colors">
            View full archive <ExternalLink size={16} />
          </a>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              className="group glass-panel rounded-2xl flex flex-col h-full relative overflow-hidden border border-white/5 hover:border-primary/30 transition-colors duration-500"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                
                <h4 className="text-2xl font-serif font-bold mb-3 text-foreground">{project.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 rounded-full bg-white/5 text-foreground hover:bg-primary hover:text-primary-foreground transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 rounded-full bg-white/5 text-foreground hover:bg-primary hover:text-primary-foreground transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
