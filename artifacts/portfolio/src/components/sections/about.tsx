import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Cpu, Terminal, Compass, Sparkles } from 'lucide-react';

const STATS = [
  { label: 'Years Experience', value: `${portfolioData.personalInfo.yearsOfExperience}+` },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Core Technologies', value: '30+' },
  { label: 'WCAG Accessibility', value: '100%' },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 text-left max-w-3xl">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">About Me</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Engineering Refined Web Architectures.
          </h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            {portfolioData.summary}
          </p>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Large Column: Frontend Philosophy & Values */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 rounded-3xl glow-border flex flex-col justify-between hover:border-primary/20 transition-all duration-500 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Terminal size={20} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Frontend Philosophy</h4>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  I believe codebases should be treated like elite products. Clean directories, strict typescript schemas, semantic elements, and bundle-size minimalism are core goals of my build strategy.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-8 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Code is Craftsmanship</span>
                <Sparkles size={12} className="text-primary/60" />
              </div>
            </motion.div>

            {/* Development Approach Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel p-8 rounded-3xl glow-border flex flex-col justify-between hover:border-primary/20 transition-all duration-500 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Cpu size={20} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Development Approach</h4>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Utilizing Component-Driven Design (CDD) with reusable React systems and unified SCSS/Tailwind configurations. This reduces turnaround time and eliminates rendering mismatches on device breakpoints.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-8 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Modular & Scalable</span>
                <Sparkles size={12} className="text-primary/60" />
              </div>
            </motion.div>

            {/* Problem Solving Card (Full width on md screens) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-8 rounded-3xl glow-border flex flex-col justify-between hover:border-primary/20 transition-all duration-500 group md:col-span-2"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Compass size={20} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Performance & Access</h4>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Determined to resolve viewport performance bottlenecks, layout drift (CLS), and paint latency. I focus deeply on WCAG compliance, using proper ARIA semantics and key controls so that web apps are open and accessible to all users.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-8 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>95+ Core Web Vitals target</span>
                <Sparkles size={12} className="text-primary/60" />
              </div>
            </motion.div>

          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl glow-border flex items-center justify-between border-white/5 hover:border-primary/25 transition-all duration-500 group"
              >
                <div>
                  <h5 className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1 group-hover:text-foreground/80 transition-colors">
                    {stat.label}
                  </h5>
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-serif">
                    {stat.value}
                  </span>
                </div>
                <div className="w-1.5 h-8 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
