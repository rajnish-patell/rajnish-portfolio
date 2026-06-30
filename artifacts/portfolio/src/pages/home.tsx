import React from 'react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Services from '@/components/sections/services';
import WhyHireMe from '@/components/sections/why-hire-me';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Achievements from '@/components/sections/achievements';
import Testimonials from '@/components/sections/testimonials';
import Marquee from '@/components/sections/marquee';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="sm:overflow-visible overflow-hidden flex flex-col min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Marquee />
        <Skills />
        <Services />
        <WhyHireMe />
        <Experience />
        <Projects />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
