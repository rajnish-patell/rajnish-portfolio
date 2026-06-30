import React from 'react';
import { motion } from 'framer-motion';
import avatarImg from '@assets/generated_images/avatar.png';

const STATS = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Projects Delivered', value: '20+' },
  { label: 'Specialist', value: 'React/Next' },
  { label: 'Status', value: 'Open' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] w-full max-w-md mx-auto relative rounded-2xl overflow-hidden glass-panel glow-border p-2">
              <div className="w-full h-full rounded-xl overflow-hidden bg-muted relative">
                {/* Fallback color if image doesn't load/is generating */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background" />
                <img 
                  src={avatarImg} 
                  alt="Rajnish Patel Avatar" 
                  className="w-full h-full object-cover relative z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 opacity-90 hover:opacity-100 hover:scale-105"
                  onError={(e) => {
                    // Fallback visually if generated image is missing
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-20 pointer-events-none" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-2xl rounded-full pointer-events-none" />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -right-4 bottom-12 md:-right-8 md:bottom-20 glass-panel px-6 py-4 rounded-2xl glow-border shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif font-bold text-primary">4<span className="text-2xl text-primary/70">+</span></div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider leading-tight">Years<br/>Experience</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Engineering refined <br/>frontend interfaces.</h3>
            
            <div className="space-y-6 text-muted-foreground text-lg mb-10 leading-relaxed font-light">
              <p>
                I am a specialized frontend craftsman. While others bolt libraries together, I focus on the architecture, the render cycle, and the precise moment a user interacts with the screen. 
              </p>
              <p>
                With over 4 years of deep experience in the React ecosystem, I build applications that are not just functionally robust, but feel snappy and deliberate. I care deeply about developer experience (DX) and user experience (UX) in equal measure.
              </p>
              <p>
                Currently specializing in Next.js, TypeScript, and complex state management to deliver premium web applications that scale.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  className="glass-panel rounded-xl p-4 flex flex-col gap-1 border-white/5 hover:border-primary/30 transition-colors"
                >
                  <span className="text-2xl font-serif font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
