import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, MapPin, Briefcase, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import avatarImg from '@assets/generated_images/avatar.png';

export default function Hero() {
  const { name, title, location, yearsOfExperience } = portfolioData.personalInfo;

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
        {/* Subtle radial gradients */}
        <div className="absolute top-1/4 left-1/10 w-[45vw] h-[45vw] bg-primary/5 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/10 w-[35vw] h-[35vw] bg-blue-500/5 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* Modern Grid Overlay with Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none z-0" />

      {/* Decorative Light Beams */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/25 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left: Copy Content */}
          <div className="lg:col-span-7 text-left flex flex-col items-start order-2 lg:order-1">
            
            {/* Availability & Location Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for opportunities
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/5 bg-white/5 text-muted-foreground text-xs font-semibold"
              >
                <MapPin size={12} className="text-primary/70" />
                <span>{location}</span>
              </motion.div>
            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Crafting premium <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/40">
                frontend architectures.
              </span>
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-xl font-light leading-relaxed"
            >
              Hi, I'm <span className="text-foreground font-semibold font-serif">{name}</span>. A <span className="text-foreground font-medium">{title}</span> specializing in building award-worthy, responsive React and Next.js digital platforms with a strong focus on pixel-perfection, clean systems, and WCAG accessibility standards.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2.5 px-7 py-4 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-all duration-300 transform active:scale-[0.98] group"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2.5 px-7 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-foreground font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 transform active:scale-[0.98]"
              >
                <Mail size={16} className="text-muted-foreground group-hover:text-foreground" />
                Contact Me
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert("Resume download triggered (Demo)"); }}
                className="flex items-center justify-center gap-2 px-4 py-4 text-sm text-muted-foreground hover:text-foreground font-semibold transition-colors duration-300"
              >
                <Download size={14} />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Premium Interactive Photo/Avatar Card */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[340px] aspect-square sm:max-w-[380px]"
            >
              {/* Spinning background glow element */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 via-blue-500/10 to-transparent blur-xl -z-10 animate-pulse" />

              {/* Photo Frame Container */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden glass-panel border border-white/10 p-3.5 relative group hover:border-primary/30 transition-all duration-700">
                <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-muted/30 relative">
                  {/* Background gradient block */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-black/60 z-0" />
                  
                  <img
                    src={avatarImg}
                    alt={`${name} Professional Headshot`}
                    className="w-full h-full object-cover relative z-10 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 scale-[1.02] group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                    }}
                  />

                  {/* Overlaid linear gradient grid pattern on top of image */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(10,11,15,0.7)_20%,transparent_100%)] z-20 pointer-events-none" />
                </div>
              </div>

              {/* Float-over experience badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 left-0 sm:-left-6 bg-card border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-3 z-30 pointer-events-none max-w-[170px]"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0">
                  <Briefcase size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold font-serif leading-none">{yearsOfExperience}+ Years</div>
                  <div className="text-[10px] text-muted-foreground font-semibold uppercase mt-0.5 tracking-wider">Experience</div>
                </div>
              </motion.div>

              {/* Float-over performance badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-4 right-0 sm:-right-4 bg-card border border-white/10 rounded-2xl px-3.5 py-2.5 shadow-2xl flex items-center gap-2 z-30 pointer-events-none"
              >
                <Sparkles size={14} className="text-primary animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-xs font-semibold tracking-wide">React / Next.js Expert</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-[18px] h-[30px] rounded-full border border-muted-foreground/30 p-[3px] flex justify-center">
          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-[3px] h-[6px] rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
