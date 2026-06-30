import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Rajnish possesses an exceptional eye for layout precision. He restructured our betting portal UI, making it modular and fast. Development turnaround times were cut by 30% under his system.",
    author: "Frontend Engineering Lead",
    role: "UI & Architecture",
    company: "GammaStack"
  },
  {
    quote: "Rajnish's work on Core Web Vitals was fantastic. He spearheaded asset and lazy rendering pipelines, lowering page load times by 20% and improving our Lighthouse scores significantly.",
    author: "Product Director",
    role: "Showcase Portal Operations",
    company: "Cyber Infrastructure"
  },
  {
    quote: "Rajnish led our accessibility compliance audit. He modified Braintree portals to meet rigorous WCAG standards, ensuring smooth layouts and keyboard responsiveness across frameworks.",
    author: "Director of Engineering",
    role: "Compliance & Delivery",
    company: "Braintree Products"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative bg-background">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 text-left max-w-3xl">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Feedback</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Client & Peer Endorsements.
          </h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Collaborative feedback from engineering leads and product directors on live production projects.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel p-8 rounded-3xl glow-border flex flex-col justify-between hover:border-primary/20 transition-all duration-500 group relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <Quote size={24} className="text-primary/20 mb-6 group-hover:text-primary transition-colors duration-300" />
                <p className="text-muted-foreground text-sm font-light leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 mt-auto flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-none">
                    {item.author}
                  </h4>
                  <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider mt-1.5 inline-block">
                    {item.role} @ <span className="text-primary/80 font-bold">{item.company}</span>
                  </span>
                </div>
                <Sparkles size={12} className="text-primary/50" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
