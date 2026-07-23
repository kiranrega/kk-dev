import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Lancerscape",
    subtitle: "Sponsor Management Platform",
    period: "Production project",
    githubUrl: "",
    liveUrl: "",
    description:
      "Sponsor-management platform with performance-focused rendering and high-coverage test workflows.",
    platform: "Web App",
    type: "Production",
    role: "Lead Dev",
    keyResult: "90%+ test coverage · 20% rendering perf gain",
    challenge: "No virtualization — rendering 5,000+ records caused UI freezes",
    outcome: "20% faster rendering, 90%+ coverage, zero critical bugs across 3 releases",
    bullets: [
      "Improved rendering performance by 20% with React.memo and react-window virtualization over 5,000+ records.",
      "Achieved 90%+ test coverage with zero critical bugs across 3 releases.",
      "Owned task allocation for a 4-person squad, cutting PR review cycle from 3 days to under 1 day.",
    ],
    tech: ["React", "TypeScript", "Redux", "Jest"],
    image: "/project/lancerscape.svg",
  },
  {
    name: "Catapult",
    subtitle: "Workforce Management System",
    period: "Enterprise product",
    githubUrl: "",
    liveUrl: "",
    description:
      "Roster Preview module for workforce operations that replaced manual spreadsheet workflows.",
    platform: "Enterprise Web App",
    type: "Enterprise",
    role: "Developer",
    keyResult: "~6 hrs/week saved · 65% fewer code smells",
    challenge: "Admin team manually managing rosters via spreadsheets — 6+ hrs/week lost",
    outcome: "Guided preview experience eliminated manual work; 65% code smell reduction via SonarQube",
    bullets: [
      "Saved the admin team about 6 hours per week through a guided roster preview experience.",
      "Resolved 40+ SonarQube defects and cut code-smell density by 65%.",
    ],
    tech: ["React.js", "Redux", "SonarQube"],
    image: "/project/catapult.png",
  },
  {
    name: "OpenDraw",
    subtitle: "Real-Time Collaborative Drawing App",
    period: "Personal Project",
    githubUrl: "https://github.com/kiranrega/OpenDraw",
    liveUrl: "https://opendraw.netlify.app",
    description:
      "Excalidraw-inspired collaborative canvas with real-time multi-user drawing, JWT auth, and WebSocket-based shape sync.",
    platform: "Web App",
    type: "Personal",
    role: "Solo Dev",
    keyResult: "3-service monorepo · Real-time multi-user sync",
    challenge: "Syncing canvas state across multiple users without conflicts or data loss",
    outcome: "Sub-100ms shape broadcast, persistent drawing history, JWT-secured WebSocket connections",
    bullets: [
      "Built a real-time collaborative drawing app using Next.js, Express, and WebSockets — separate HTTP and WS backends in a Turborepo monorepo with shared TypeScript types across services.",
      "Implemented JWT-secured WebSocket connections, PostgreSQL shape persistence via Prisma, and bcrypt + rate-limited auth — supporting multi-user rooms with live canvas sync.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Prisma", "Turborepo"],
    image: "/project/opendraw.png",
  },
];
