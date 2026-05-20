export const profile = {
  name: "Kiran Kumar Rega",
  role: "Full-Stack Software Engineer",
  headline:
    "Building measurable React, TypeScript, and Node.js products where performance, quality, and user outcomes matter.",
  summary:
    "Full-Stack Software Engineer with 3+ years delivering enterprise-grade React, TypeScript, and Node.js applications. Recognised as Top Performer - Q3 2024 at IntouchCX. Shipped code that cut API latency by 25%, halved codebase duplication, boosted frontend performance by 30%, and achieved 80%+ test coverage.",
  location: "Hyderabad, India",
  phone: "+91 85000 44241",
  email: "kirankumar.rega@gmail.com",
  website: "kiranrega.netlify.app",
  github: "github.com/kiranrega",
  linkedin: "linkedin.com/in/kiranrega",
  pronouns: "he/him",
};

export const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  { label: "Experience", value: "3+ years" },
  { label: "API latency", value: "-25%" },
  { label: "Frontend performance", value: "+30%" },
  { label: "Test coverage", value: "80%+" },
];

export const about = [
  "Frontend-focused full-stack engineer with production experience across enterprise React, TypeScript, Redux, Node.js, REST APIs, and testing workflows.",
  "Strong record of improving code quality: reduced frontend defect escape rate by 30%, cleared a 60-issue SonarQube backlog, and built shared component layers across multiple products.",
  "Comfortable owning delivery end to end: performance tuning, reusable UI systems, API integration, code review gates, mentoring, and release quality.",
];

export const stackGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Context API",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "WebSockets",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "Enzyme", "TDD"],
  },
  {
    title: "Tooling",
    items: ["Git", "Webpack", "Vite", "SonarQube", "Postman", "ESLint"],
  },
];

export const experience = [
  {
    company: "IntouchCX",
    role: "Software Developer",
    type: "Full-time",
    location: "Hyderabad",
    period: "May 2024 - Present",
    duration: "Current",
    bullets: [
      "Cut REST API average response time by 25% via query optimisation and payload trimming for 10,000+ daily active sessions.",
      "Reduced frontend defect escape rate by 30% through structured code-review gates and automated linting pipelines adopted team-wide.",
      "Ramped 2 junior engineers to independent delivery in under 8 weeks through pair programming and weekly feedback.",
      "Delivered 6 end-to-end feature launches across 3 consecutive quarters with zero production rollbacks.",
      "Recognised as Top Performer - Q3 2024 out of the engineering cohort.",
    ],
    tech: ["React", "TypeScript", "Node.js", "REST APIs", "ESLint", "Code Review"],
  },
  {
    company: "Extended Web AppTech",
    role: "Software Developer",
    type: "Full-time",
    location: "Hyderabad",
    period: "Mar 2022 - Sep 2023",
    duration: "1y 7m",
    bullets: [
      "Slashed code duplication by 50% via a shared component library and custom-hook layer across 4 production apps.",
      "Boosted frontend performance by 30% by reducing bundle size from about 980 kB to about 420 kB with React.memo, lazy loading, and Webpack splitting.",
      "Grew test coverage from near-zero to 80%+ using Jest and React Testing Library, reducing regression bugs by an estimated 40%.",
      "Cleared a 60-issue SonarQube backlog in one sprint; technical-debt ratio dropped from 8.2% to 1.4%.",
      "Eliminated redundant API calls with React Query caching, cutting network overhead by about 35% on data-heavy views.",
    ],
    tech: ["React", "Redux", "Webpack", "Jest", "RTL", "SonarQube", "React Query"],
  },
];

export const projects = [
  {
    name: "Lancerscape",
    subtitle: "Sponsor Management Platform",
    period: "Production project",
    description:
      "React and TypeScript sponsor-management platform with performance-focused rendering and high-coverage test workflows.",
    bullets: [
      "Improved rendering performance by 20% with React.memo and react-window virtualization over 5,000+ records.",
      "Achieved 90%+ test coverage with zero critical bugs across 3 releases.",
      "Owned task allocation for a 4-person squad, cutting PR review cycle from 3 days to under 1 day.",
    ],
    tech: ["React", "TypeScript", "Redux", "REST APIs", "Jest"],
  },
  {
    name: "Catapult",
    subtitle: "Workforce Management System",
    period: "Enterprise product",
    description:
      "Roster Preview module for workforce operations that replaced manual spreadsheet workflows.",
    bullets: [
      "Saved the admin team about 6 hours per week through a guided roster preview experience.",
      "Resolved 40+ SonarQube defects and cut code-smell density by 65%.",
    ],
    tech: ["React.js", "Redux", "SonarQube"],
  },
  {
    name: "Extended Asset Management System",
    subtitle: "Asset Operations Dashboard",
    period: "Internal platform",
    description:
      "Dashboard for managing 3,000+ assets with fast search and a reusable UI kit used by adjacent products.",
    bullets: [
      "Built search interactions under 200 ms for large asset records.",
      "Created a 12-component UI kit adopted across 3 products, reducing scaffold time by 40%.",
    ],
    tech: ["React.js", "Material UI", "Axios"],
  },
];

export const education = [
  {
    school: "NxtWave Disruptive Technologies",
    degree: "Continuous Capacity Building Program",
    period: "Feb 2021 - Jul 2021",
  },
  {
    school: "Vijayanagara Sri Krishna Devaraya University",
    degree: "Master of Technology",
    period: "Jul 2013 - Jul 2016",
  },
];

export const commands = [
  { label: "Open email", href: `mailto:${profile.email}` },
  { label: "Open GitHub", href: `https://${profile.github}` },
  { label: "Open LinkedIn", href: `https://${profile.linkedin}` },
  { label: "View experience", href: "#experience" },
  { label: "View projects", href: "#projects" },
  { label: "View stack", href: "#stack" },
];
