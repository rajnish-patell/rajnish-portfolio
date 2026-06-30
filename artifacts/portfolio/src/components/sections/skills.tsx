import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  {
    category: "Frontend Core",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES2022+)", "HTML5", "CSS3"]
  },
  {
    category: "Styling & Motion",
    items: ["Tailwind CSS", "Styled Components", "SCSS", "Framer Motion", "Radix UI"]
  },
  {
    category: "State & Data",
    items: ["Redux Toolkit", "Zustand", "React Query", "SWR", "GraphQL", "REST APIs"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Vite", "Webpack", "Docker basics", "Vercel", "CI/CD"]
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Cypress", "Storybook"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-background/50">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">The Technical Arsenal.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {SKILLS.map((group, groupIdx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
              className="glass-panel p-8 rounded-2xl glow-border flex flex-col h-full"
            >
              <h4 className="text-lg font-serif font-medium mb-6 text-foreground/90 border-b border-white/5 pb-4">
                {group.category}
              </h4>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5 mt-auto"
              >
                {group.items.map((skill) => (
                  <motion.span 
                    key={skill}
                    variants={itemVariants}
                    className="px-4 py-2 bg-secondary/50 text-secondary-foreground text-sm font-medium rounded-full border border-white/5 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
