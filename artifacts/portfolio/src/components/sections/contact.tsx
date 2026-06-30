import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle2, Phone, MapPin, Linkedin, Github, Twitter, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { portfolioData } from '@/data/portfolio';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form success state after a few seconds
      setTimeout(() => setIsSuccess(false), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left h-full">
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Get in Touch</h2>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 font-serif leading-none">
                Let's build <br />something.
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
                Seeking a senior frontend developer, a custom component design system, or a technical performance audit? Let's connect.
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold mb-10 select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Active and open to roles
              </div>

              {/* Detail Blocks */}
              <div className="space-y-6 mb-12">
                <a 
                  href={`mailto:${portfolioData.contact.email}`} 
                  className="flex items-center gap-4 group text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-all duration-300">
                    <Mail size={16} className="text-primary/70" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground">Email</div>
                    <div className="text-sm font-semibold mt-0.5">{portfolioData.contact.email}</div>
                  </div>
                </a>

                <a 
                  href={`tel:${portfolioData.contact.phone}`} 
                  className="flex items-center gap-4 group text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-all duration-300">
                    <Phone size={16} className="text-primary/70" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground">Phone</div>
                    <div className="text-sm font-semibold mt-0.5">{portfolioData.contact.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-primary/70" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground">Location</div>
                    <div className="text-sm font-semibold mt-0.5">{portfolioData.contact.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Links Grid */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/5">
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-foreground flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-foreground flex items-center justify-center transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href={portfolioData.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 sm:p-12 rounded-[2.5rem] glow-border border-white/5 w-full hover:border-primary/10 transition-colors duration-700"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="name" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Name</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  {/* Email field */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="email" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Email</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                {/* Message field */}
                <div className="space-y-2 text-left">
                  <label htmlFor="message" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full py-4 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 rounded-full border-2 border-background/30 border-t-background animate-spin" />
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 size={18} className="text-green-500 animate-bounce" />
                      Sent Successfully
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
