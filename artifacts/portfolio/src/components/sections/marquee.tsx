import React from 'react';

import { portfolioData } from '@/data/portfolio';

// Extract all unique items from skills categories
const TECH_ITEMS = Array.from(
  new Set(portfolioData.skills.flatMap(group => group.items))
);

// Double the items so the scroll is perfectly seamless
const SCROLL_ITEMS = [...TECH_ITEMS, ...TECH_ITEMS];

export default function Marquee() {
  return (
    <div className="py-12 border-y border-white/5 bg-background overflow-hidden relative flex items-center">
      
      {/* Gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {SCROLL_ITEMS.map((item, index) => (
          <div 
            key={`${item}-${index}`} 
            className="px-8 md:px-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
