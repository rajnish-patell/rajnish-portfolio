import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, FileText, ArrowRight, ShieldCheck, Zap, Laptop, BrainCircuit, Star } from 'lucide-react';
import { portfolioData, ProjectItem } from '@/data/portfolio';

const PROJECTS = portfolioData.projects;

export default function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  // Render a mock screenshot/UI dashboard depending on the project
  const renderProjectMockup = (project: ProjectItem) => {
    switch (project.id) {
      case 'kingprize':
        return (
          <div className="w-full h-full bg-gradient-to-br from-indigo-900/60 to-purple-950/80 p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono tracking-widest text-primary font-bold">KINGPRIZE CASINO</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="my-auto py-4">
              <div className="text-xl font-bold tracking-tight text-white mb-1">Live Bets Stream</div>
              <div className="text-[10px] text-muted-foreground font-mono">Websocket Hydrated Log</div>
              <div className="mt-3 space-y-1.5">
                <div className="h-6 w-full rounded-md bg-white/5 border border-white/5 flex items-center justify-between px-3 text-[10px] text-primary">
                  <span>Player 83x...</span>
                  <span className="font-mono">+2.5 ETH</span>
                </div>
                <div className="h-6 w-full rounded-md bg-white/5 border border-white/5 flex items-center justify-between px-3 text-[10px] text-muted-foreground">
                  <span>Player 10c...</span>
                  <span className="font-mono">-0.4 ETH</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">60 FPS Hybrid UI</span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground">Capacitor wrapper</span>
            </div>
          </div>
        );
      case 'clutch':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-zinc-900 to-black p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-mono tracking-widest text-white/40">CLUTCH APP</span>
              <span className="text-[9px] font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded">Pixel-Perfect</span>
            </div>
            <div className="my-auto grid grid-cols-3 gap-3">
              <div className="glass-panel p-3 rounded-xl border-white/5 flex flex-col items-center justify-center">
                <div className="text-lg font-bold text-white">99.8%</div>
                <span className="text-[8px] text-muted-foreground uppercase tracking-widest text-center mt-1">Accuracy</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border-white/5 flex flex-col items-center justify-center">
                <div className="text-lg font-bold text-white">Grid</div>
                <span className="text-[8px] text-muted-foreground uppercase tracking-widest text-center mt-1">Bootstrap 5</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border-white/5 flex flex-col items-center justify-center">
                <div className="text-lg font-bold text-white">0</div>
                <span className="text-[8px] text-muted-foreground uppercase tracking-widest text-center mt-1">Layout Drift</span>
              </div>
            </div>
            <div className="text-[9px] text-muted-foreground leading-relaxed">
              Fully optimized breakpoint viewport configuration.
            </div>
          </div>
        );
      case 'rollify':
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-950/60 to-zinc-950/90 p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-mono tracking-widest text-emerald-400 font-bold">ROLLIFY CRYPTO</span>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 flex items-center justify-center animate-ping">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
            <div className="my-auto py-2">
              <div className="text-xs font-mono text-muted-foreground mb-1">Tailwind Style Asset Size</div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold tracking-tight text-white">-15%</span>
                <span className="text-[9px] text-emerald-400 font-mono mb-1">Asset Bloat Cut</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-3">
                <div className="h-full w-4/5 bg-emerald-400 rounded-full" />
              </div>
            </div>
            <div className="text-[9px] text-muted-foreground font-mono">Tailwind CSS Utility Structure</div>
          </div>
        );
      case 'winpanda':
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-950/60 via-slate-900 to-black p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-mono tracking-widest text-blue-400">WINPANDA PORTAL</span>
              <div className="text-[9px] font-mono text-white/50">Next.js CSR/ISR</div>
            </div>
            <div className="my-auto">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-muted-foreground font-mono">Core Web Vitals</span>
                <span className="text-blue-400 font-bold">Good Status</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-white/5 rounded-md p-2 border border-white/5 flex flex-col">
                  <span className="text-[8px] uppercase tracking-wider text-muted-foreground">LCP mobile</span>
                  <span className="text-sm font-bold text-white">1.4s</span>
                </div>
                <div className="bg-white/5 rounded-md p-2 border border-white/5 flex flex-col">
                  <span className="text-[8px] uppercase tracking-wider text-muted-foreground">CLS score</span>
                  <span className="text-sm font-bold text-white">0.02</span>
                </div>
              </div>
            </div>
            <div className="text-[9px] text-muted-foreground font-mono">Dynamic image resolution caching</div>
          </div>
        );
      case 'lottofun':
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-950/50 to-zinc-950/95 p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-mono tracking-widest text-amber-500 font-bold">LOTT-O-FUN</span>
              <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Next.js SSR</span>
            </div>
            <div className="my-auto">
              <div className="text-2xl font-bold tracking-tight text-white mb-1">Lotto UI Architecture</div>
              <p className="text-[9px] text-muted-foreground leading-relaxed">
                Server-side rendered dynamic lottery draws for optimal load speeds on client viewports.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400">SSR Framework</span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground">Adaptive layouts</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-black p-6 flex items-center justify-center">
            <span className="text-sm text-muted-foreground font-mono">Mock Preview</span>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-32 relative bg-background">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24 max-w-6xl mx-auto">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Selected Work</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">Featured Projects.</h3>
          </div>
          <a
            href="https://github.com/rajnish-patell"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground font-medium flex items-center gap-2 transition-colors duration-300 group text-sm"
          >
            Explore git archive 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Alternate / Alternating Grid Layout for projects */}
        <div className="max-w-6xl mx-auto space-y-24">
          {PROJECTS.map((project, idx) => {
            const isAlternate = idx % 2 !== 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                
                {/* Mockup Preview Area (Left or Right based on Alternating idx) */}
                <div className={`lg:col-span-6 overflow-hidden rounded-[2.5rem] glass-panel p-3 border border-white/5 hover:border-primary/20 transition-all duration-500 group relative ${isAlternate ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="aspect-[16/10] w-full rounded-[1.8rem] overflow-hidden bg-muted/20 relative">
                    {renderProjectMockup(project)}
                    {/* Dark zoom overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                  </div>
                </div>

                {/* Project Details Copy (Right or Left) */}
                <div className={`lg:col-span-6 flex flex-col items-start ${isAlternate ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Category icon indicator */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-mono tracking-widest text-muted-foreground mb-6">
                    <Laptop size={10} className="text-primary/70" />
                    <span>Frontend Project</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4 font-serif">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-base font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold text-foreground px-3 py-1 bg-white/5 border border-white/5 rounded-md hover:border-primary/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link buttons */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    {project.caseStudy && (
                      <button
                        onClick={() => setActiveCaseStudy(project)}
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-foreground font-semibold rounded-xl text-sm transition-all duration-300 active:scale-[0.98] group"
                      >
                        <FileText size={16} className="text-muted-foreground group-hover:text-foreground" />
                        Case Study
                      </button>
                    )}
                    
                    {project.live && !project.live.startsWith('TODO') && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-foreground text-background hover:bg-foreground/90 font-bold rounded-xl text-sm transition-all duration-300 active:scale-[0.98]"
                      >
                        Live Demo
                        <ExternalLink size={14} />
                      </a>
                    )}


                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Slide-over / Modal */}
      <AnimatePresence>
        {activeCaseStudy && activeCaseStudy.caseStudy && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCaseStudy(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm cursor-pointer"
            />

            {/* Slide-over Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-[620px] bg-card border-l border-white/10 z-50 shadow-2xl overflow-y-auto flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between sticky top-0 bg-card/90 backdrop-blur-md z-10">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">CASE STUDY</span>
                  <h4 className="text-xl md:text-2xl font-bold font-serif text-foreground mt-1">
                    {activeCaseStudy.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-muted-foreground hover:text-foreground transition-colors outline-none"
                  aria-label="Close case study panel"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Body Content */}
              <div className="p-6 md:p-8 flex-grow space-y-10">
                {/* Intro summary */}
                <div className="space-y-3">
                  <h5 className="text-xs uppercase tracking-widest font-bold text-muted-foreground flex items-center gap-1.5">
                    <Laptop size={12} className="text-primary/70" />
                    Project Overview
                  </h5>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {activeCaseStudy.description}
                  </p>
                </div>

                {/* Problem Statement */}
                <div className="space-y-3">
                  <h5 className="text-xs uppercase tracking-widest font-bold text-red-400/80 flex items-center gap-1.5">
                    <BrainCircuit size={12} className="text-red-400/60" />
                    The Problem
                  </h5>
                  <p className="text-foreground text-sm font-light leading-relaxed">
                    {activeCaseStudy.caseStudy.problem}
                  </p>
                </div>

                {/* Challenges */}
                <div className="space-y-3">
                  <h5 className="text-xs uppercase tracking-widest font-bold text-amber-500/80 flex items-center gap-1.5">
                    <Zap size={12} className="text-amber-500/60" />
                    Key Challenges
                  </h5>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {activeCaseStudy.caseStudy.challenges}
                  </p>
                </div>

                {/* Architecture stack list */}
                <div className="space-y-4">
                  <h5 className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                    Case Study Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeCaseStudy.caseStudy.architecture.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-primary bg-primary/5 border border-primary/10 px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div className="space-y-3">
                  <h5 className="text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-primary" />
                    The Solution Implementation
                  </h5>
                  <p className="text-foreground text-sm font-light leading-relaxed">
                    {activeCaseStudy.caseStudy.solution}
                  </p>
                </div>

                {/* Results Metrics list */}
                <div className="space-y-4 bg-white/5 border border-white/5 rounded-2xl p-6">
                  <h5 className="text-xs uppercase tracking-widest font-bold text-foreground flex items-center gap-1.5">
                    <Star size={14} className="text-primary" />
                    Business & Performance Results
                  </h5>
                  <ul className="space-y-3">
                    {activeCaseStudy.caseStudy.results.map((metric, i) => (
                      <li key={i} className="text-sm font-light text-muted-foreground flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lessons Learned */}
                <div className="space-y-3">
                  <h5 className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                    Lessons Learned
                  </h5>
                  <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-sm font-light leading-relaxed">
                    {activeCaseStudy.caseStudy.lessons.map((lesson, idx) => (
                      <li key={idx} className="pl-1">{lesson}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-white/5 flex gap-4 sticky bottom-0 bg-card z-10">
                {activeCaseStudy.live && !activeCaseStudy.live.startsWith('TODO') && (
                  <a
                    href={activeCaseStudy.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-grow flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background hover:bg-foreground/90 font-bold rounded-xl text-sm transition-all duration-300"
                  >
                    Open Live Deployment
                    <ExternalLink size={14} />
                  </a>
                )}

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
