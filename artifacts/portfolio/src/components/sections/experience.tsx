import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

interface ExpWithAchievements {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
  achievements: string[];
}

const EXPERIENCE_DATA: ExpWithAchievements[] = [
  {
    role: "UI Developer",
    company: "GammaStack",
    period: "May 2025 – Present",
    location: "Indore, India",
    description: [
      "Architected and deployed modular, interactive user interfaces for enterprise-grade casino and betting platforms using React.js, Next.js, HTML5, and CSS3/SCSS.",
      "Managed clean production code integration and pull request streams via Git workflows, coordinating cross-functional team priorities."
    ],
    tech: ["React.js", "Next.js", "HTML5", "CSS3/SCSS", "Git"],
    achievements: [
      "Built an atomic component library that reduced frontend turnaround times by 30%.",
      "Integrated canvas loaders and micro-interactions, raising client session times by 15%."
    ]
  },
  {
    role: "Frontend Web Developer",
    company: "Cyber Infrastructure",
    period: "Aug 2022 – Apr 2025",
    location: "Indore, India",
    description: [
      "Designed and shipped interactive UI components for high-traffic business applications, improving interface response rates and code maintainability.",
      "Built scalable production code using React.js, modern JavaScript, and Git while coordinating tasks via Jira and Trello."
    ],
    tech: ["React.js", "JavaScript", "Git", "Jira", "Trello"],
    achievements: [
      "Spearheaded file footprint optimization and lazy rendering pipelines, reducing asset load times by 20%.",
      "Significantly improved Core Web Vitals scores and organic search visibility."
    ]
  },
  {
    role: "UI Developer",
    company: "Braintree Products Pvt Ltd",
    period: "Jun 2021 – Aug 2022",
    location: "Indore, India",
    description: [
      "Crafted fluid, responsive user experiences using HTML5, CSS3, JavaScript, and React.js, achieving pixel-accurate alignment with high-fidelity UI designs."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "React.js", "WCAG"],
    achievements: [
      "Implemented global WCAG accessibility standards, ensuring full compatibility for diverse user groups.",
      "Optimized viewport scaling configurations, boosting mobile interaction scores by 25%."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-background">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-24 text-left max-w-3xl">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Career</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Professional Trajectory.
          </h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Leading engineering practices, layout optimization, and high-performance UI delivery at fast-paced product companies.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="max-w-4xl mx-auto relative pl-10 sm:pl-12 md:pl-16">
          {/* Central Vertical Line */}
          <div className="absolute left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary/30 via-border to-white/5 sm:left-[19px] md:left-[23px]" />

          <div className="space-y-16">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Pulsing Circle Indicator */}
                <div className="absolute -left-[40px] sm:-left-[44px] md:-left-[56px] top-2 flex items-center justify-center w-8 h-8 rounded-full bg-background border border-border group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(198,248,34,0.4)] transition-all duration-500 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors duration-500" />
                </div>

                {/* Experience Detail Card */}
                <div className="glass-panel p-8 sm:p-10 rounded-[2rem] glow-border border-white/5 group-hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
                  {/* Card Title & Meta Info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground font-serif leading-none group-hover:text-primary transition-colors duration-300">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-6 mt-3 text-sm text-muted-foreground font-medium">
                        <span className="flex items-center gap-1.5 text-foreground/80">
                          <Briefcase size={14} className="text-primary/70" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-muted-foreground/70" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-2 text-xs font-mono font-semibold text-muted-foreground bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit h-fit">
                      <Calendar size={12} className="text-primary/70" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Core Responsibilities */}
                  <div className="mb-6">
                    <h5 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3 flex items-center gap-1.5">
                      <Sparkles size={12} className="text-primary/50" />
                      Key Responsibilities
                    </h5>
                    <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed space-y-2">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="pl-1 font-light">{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-8 bg-white/5 border border-white/5 rounded-2xl p-5 md:p-6">
                    <h5 className="text-xs uppercase tracking-widest font-bold text-primary mb-3.5 flex items-center gap-1.5">
                      <Award size={14} className="text-primary" />
                      Significant Milestones
                    </h5>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm font-light text-foreground/95 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold text-muted-foreground px-3 py-1 bg-white/5 border border-white/5 rounded-md hover:border-primary/30 hover:text-primary transition-all duration-300"
                      >
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
