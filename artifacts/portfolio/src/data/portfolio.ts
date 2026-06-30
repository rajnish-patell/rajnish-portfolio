export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  twitter: string;
  yearsOfExperience: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

export interface CaseStudy {
  problem: string;
  research?: string;
  approach?: string;
  architecture: string[];
  challenges: string;
  solution: string;
  results: string[];
  lessons: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  caseStudy?: CaseStudy;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export interface AchievementItem {
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  summary: string;
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  contact: ContactInfo;
  socialLinks: SocialLinks;
  languages: string[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Rajnish Patel",
    title: "UI Developer & Frontend Developer",
    phone: "+91-8349655888",
    email: "patelrajnish47@gmail.com",
    location: "Indore, India",
    linkedin: "https://linkedin.com/in/rajnish-patelb439a5196",
    github: "https://github.com/rajnish-patell",
    twitter: "https://twitter.com/rajnish_patell",
    yearsOfExperience: "5"
  },
  summary: "UI Developer and Frontend Developer with 5 years of professional experience building, scaling, and optimizing responsive, high-performance web applications. Proficient in architecting accessible, modular, and reusable frontend codebases using React.js, Next.js, JavaScript (ES6+), and Tailwind CSS. Proven record of leading asset footprint optimizations, reducing load times, and improving key metrics within Agile/Scrum environments.",
  skills: [
    {
      category: "Core Languages & Architecture",
      items: ["HTML5", "CSS3", "SCSS", "JavaScript (ES6+)", "jQuery", "Responsive Design", "UI/UX"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap 5", "WCAG Accessibility Standards"]
    },
    {
      category: "State Management",
      items: ["Redux", "Redux Toolkit", "Context API", "React Query"]
    },
    {
      category: "Frontend Tools",
      items: ["Webpack", "Vite", "Babel", "ESLint", "Prettier", "npm", "Yarn"]
    },
    {
      category: "Tools, Platforms & Processes",
      items: ["Git", "Jira", "Trello", "Figma", "Adobe Photoshop", "Agile / Scrum Methodologies"]
    }
  ],
  experience: [
    {
      role: "UI Developer",
      company: "GammaStack",
      period: "May 2025 – Present",
      location: "Indore, India",
      description: [
        "Architected and deployed modular, interactive user interfaces for enterprise-grade casino and betting platforms using React.js, Next.js, HTML5, and CSS3/SCSS.",
        "Built an atomic component library that reduced front-end development turnaround time by 30% and ensured consistent cross-device layout stability.",
        "Integrated canvas loaders and micro-interactions, boosting client platform engagement metrics by 15%.",
        "Led front-end architecture reviews and managed clean production code integration via Git workflows."
      ],
      tech: ["React.js", "Next.js", "HTML5", "CSS3/SCSS", "Git"]
    },
    {
      role: "Frontend Web Developer",
      company: "Cyber Infrastructure",
      period: "Aug 2022 – Apr 2025",
      location: "Indore, India",
      description: [
        "Designed and shipped interactive UI components for high-traffic business applications, improving interface response rates and code maintainability.",
        "Spearheaded file footprint optimization and lazy rendering pipelines that reduced asset load times by 20%, directly improving Core Web Vitals scores and search rankings.",
        "Built scalable production code using React.js, modern JavaScript, and Git while coordinating tasks via Jira and Trello."
      ],
      tech: ["React.js", "JavaScript", "Git", "Jira", "Trello"]
    },
    {
      role: "UI Developer",
      company: "Braintree Products Pvt Ltd",
      period: "Jun 2021 – Aug 2022",
      location: "Indore, India",
      description: [
        "Crafted fluid, responsive user experiences using HTML5, CSS3, JavaScript, and React.js, achieving pixel-accurate alignment with high-fidelity UI designs.",
        "Implemented global WCAG accessibility standards, ensuring comprehensive accessibility compliance for diverse user groups.",
        "Optimized viewport scaling configurations, improving mobile interaction scores by 25% across active frameworks."
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "React.js", "WCAG"]
    }
  ],
  projects: [
    {
      id: "kingprize",
      title: "Kingprize – Premium Casino & Gaming Platform",
      description: "Designed and built a responsive, high-performance betting and gaming platform UI with Capacitor iOS optimization and dynamic theme configuration.",
      tech: ["React.js", "Vite", "Tailwind CSS", "iOS Glass Theme", "Capacitor"],
      github: "https://github.com/rajnish-patell/kingprize-ui",
      live: "https://kingprize.com/",
      caseStudy: {
        problem: "The live betting environment suffered from high latency, slow animation rendering, and DOM clutter on lower-spec iOS devices running Capacitor webviews.",
        architecture: ["React 19", "Vite", "Tailwind CSS v4", "Capacitor iOS Webview", "Framer Motion"],
        challenges: "Ensuring zero animation lag while handling live websockets bet logs and dynamically changing color themes without triggering full page layouts.",
        solution: "Implemented CSS canvas loaders and virtualized scrollable tables. Moved state processing to custom hooks, utilizing passive event listeners and requestAnimationFrame for layout transitions.",
        results: [
          "Reduced DOM nodes count by 55% during high-load streams",
          "Improved mobile framerates from 32 FPS to a stable 60 FPS",
          "Cut startup payload size by 35% using code-splitting"
        ],
        lessons: [
          "Optimizing for hybrid mobile wrappers (Capacitor) requires avoiding heavy nested DOM trees.",
          "CSS hardware acceleration is essential for smooth webview animations."
        ]
      }
    },
    {
      id: "clutch",
      title: "Clutch – Pixel-Perfect Functional Mock Suite",
      description: "Translated high-fidelity graphic mockups into modular Bootstrap 5 grid layouts, achieving full cross-browser compatibility and layout precision.",
      tech: ["React.js", "Bootstrap 5", "JavaScript (ES6+)", "GitHub Workflows"],
      github: "https://github.com/rajnish-patell/clutch-mocks",
      live: "https://www.clutch.app/",
      caseStudy: {
        problem: "Converting complex corporate brand boards into fully responsive, interactive structures that perfectly match high-fidelity client designs.",
        architecture: ["React.js", "Bootstrap 5", "SCSS", "Webpack"],
        challenges: "Managing custom responsive break-points without bloating the global CSS assets or deviating from semantic HTML templates.",
        solution: "Established a structured SCSS variables hierarchy, building highly reusable layout cards and components that dynamically respond to container widths.",
        results: [
          "Achieved 100% pixel-perfect compliance according to design audits",
          "Reduced QA review cycles by 40% using automated layouts",
          "Zero layout drift across Chrome, Safari, and Firefox"
        ],
        lessons: [
          "Setting rigorous layout token conventions early eliminates responsive edge-case bugs.",
          "Mobile-first styling structures streamline multi-breakpoint design systems."
        ]
      }
    },
    {
      id: "rollify",
      title: "Rollify – Cryptocurrency Gaming Interface",
      description: "Built a secure crypto-gaming transaction UI using Tailwind CSS utility classes, reducing overall style asset bloat by 15%.",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "Crypto UX Layouts"],
      github: "https://github.com/rajnish-patell/rollify-interface",
      live: "https://rollify.com/"
    },
    {
      id: "winpanda",
      title: "Winpanda – Gaming Showcase Portal",
      description: "Architected a mobile-first gaming portal with optimized Core Web Vitals metrics via Next.js asset rendering, improving user retention and structural performance.",
      tech: ["Next.js", "HTML5", "Tailwind CSS", "Core Web Vitals Optimization"],
      github: "https://github.com/rajnish-patell/winpanda-portal",
      live: "https://winpanda.com/",
      caseStudy: {
        problem: "The client showcase page suffered from poor image loading metrics (LCP) and high Layout Shifts (CLS), leading to search ranking degradation.",
        architecture: ["Next.js", "React.js", "Tailwind CSS", "Vercel Analytics"],
        challenges: "Optimizing hundreds of gaming hero banners loaded dynamically from a public CDN without breaking visual aspect ratios.",
        solution: "Utilized Next.js image loading properties with custom sizing grids and placeholder blur states. Implemented incremental static regeneration (ISR) to pre-render layout frameworks.",
        results: [
          "LCP score decreased from 4.2s to 1.4s on mobile devices",
          "CLS score reduced to 0.02, earning a 'Good' Core Web Vitals status",
          "Organic SEO visibility increased by 18% in the first month"
        ],
        lessons: [
          "Always define explicit aspect ratios for dynamic media elements to avoid runtime layout shifts.",
          "Pre-fetching viewport-visible assets speeds up perceived load times significantly."
        ]
      }
    },
    {
      id: "lottofun",
      title: "Lott-o-fun – Casino UI Architecture Framework",
      description: "Engineered a high-performance casino UI using Next.js Server-Side Rendering (SSR) and file-system routing to significantly reduce initial page load times on mobile viewports.",
      tech: ["Next.js", "React.js", "HTML5", "Tailwind CSS", "Adaptive UI/UX Design"],
      github: "https://github.com/rajnish-patell/lottofun-framework",
      live: "https://www.lott-o-fun.net/"
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "RGPV University, Bhopal",
      period: "Graduated: 2021",
      score: "CGPA: 65.8%"
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Madhya Pradesh State Board",
      period: "2015",
      score: "Score: 68%"
    }
  ],
  certifications: [
    {
      name: "Micro1 AI Frontend Interview Certification",
      issuer: "Micro1",
      date: "Issued: June 2026"
    }
  ],
  achievements: [
    {
      title: "Performance Optimization Milestone",
      description: "Spearheaded modular optimizations and resource prefetching that reduced home-page load times by 20% on Cyber Infrastructure projects."
    },
    {
      title: "Component Reusability Framework",
      description: "Designed a flexible, atomic UI library at GammaStack, cutting frontend feature delivery cycles by 30%."
    },
    {
      title: "Accessibility Standards Champion",
      description: "Successfully audited and modified 3 major commercial portals to meet WCAG AA compliance, expanding user demographic accessibility."
    }
  ],
  contact: {
    phone: "+91-8349655888",
    email: "patelrajnish47@gmail.com",
    location: "Indore, India"
  },
  socialLinks: {
    linkedin: "https://linkedin.com/in/rajnish-patelb439a5196",
    github: "https://github.com/rajnish-patell",
    twitter: "https://twitter.com/rajnish_patell"
  },
  languages: [
    "Hindi (Native)",
    "English (Professional)",
    "Marathi (Conversational)"
  ]
};
