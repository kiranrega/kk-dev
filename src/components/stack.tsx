// components/stack.tsx
// Swap the `tools` arrays below with your real stack (kk-dev uses MERN, not
// this exact list — the shape below just mirrors the reference screenshot).

import type { IconType } from "react-icons";
import { Box } from "lucide-react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRadixui,
  SiFramer,
  SiExpo,
  SiMobx,
  SiNodedotjs,
  SiBun,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiNginx,
  SiGooglegemini,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiPosthog,
} from "react-icons/si";

type Tool = { name: string; url: string; icon?: IconType };
type Category = { id: string; label: string; tools: Tool[] };

// No official brand icon in react-icons/si yet -> falls back to <Box />.
// Claude, Cursor, shadcn/ui, Base UI, TanStack, OpenPanel, Paper — check
// again later, simple-icons adds new marks regularly.
const CATEGORIES: Category[] = [
  {
    id: "language",
    label: "Language",
    tools: [
      { name: "TypeScript", url: "https://www.typescriptlang.org", icon: SiTypescript },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: SiJavascript },
      { name: "Python", url: "https://www.python.org", icon: SiPython },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    tools: [
      { name: "React", url: "https://react.dev", icon: SiReact },
      { name: "Next.js", url: "https://nextjs.org", icon: SiNextdotjs },
      { name: "Tailwind CSS", url: "https://tailwindcss.com", icon: SiTailwindcss },
      { name: "shadcn/ui", url: "https://ui.shadcn.com" },
      { name: "Radix UI", url: "https://www.radix-ui.com", icon: SiRadixui },
      { name: "Motion", url: "https://motion.dev", icon: SiFramer },
      { name: "Expo", url: "https://expo.dev", icon: SiExpo },
      { name: "TanStack", url: "https://tanstack.com" },
      { name: "MobX-State-Tree", url: "https://mobx-state-tree.js.org", icon: SiMobx },
    ],
  },
  {
    id: "backend-database",
    label: "Backend & Database",
    tools: [
      { name: "Node.js", url: "https://nodejs.org", icon: SiNodedotjs },
      { name: "Bun", url: "https://bun.sh", icon: SiBun },
      { name: "PostgreSQL", url: "https://www.postgresql.org", icon: SiPostgresql },
      { name: "MongoDB", url: "https://www.mongodb.com", icon: SiMongodb },
      { name: "Redis", url: "https://redis.io", icon: SiRedis },
      { name: "nginx", url: "https://nginx.org", icon: SiNginx },
    ],
  },
  {
    id: "workflow-ai",
    label: "Workflow & AI",
    tools: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "Cursor", url: "https://cursor.com" },
      { name: "Gemini", url: "https://gemini.google.com", icon: SiGooglegemini },
      // No official OpenAI mark in simple-icons anymore (only SiOpenaigym).
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Git", url: "https://git-scm.com", icon: SiGit },
      { name: "GitHub", url: "https://github.com", icon: SiGithub },
      { name: "Docker", url: "https://www.docker.com", icon: SiDocker },
      { name: "Vercel", url: "https://vercel.com", icon: SiVercel },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    tools: [
      { name: "PostHog", url: "https://posthog.com", icon: SiPosthog },
    ],
  },
];

export const stackToolCount = CATEGORIES.reduce(
  (sum, cat) => sum + cat.tools.length,
  0
);

export function Stack() {
  return (
    <div
      className="relative"
      style={{
        '--badge-height': '1.5rem',
        '--col-left-width': '12rem',
      } as React.CSSProperties}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-10 w-px border-r border-dashed border-line max-sm:hidden"
      />
      {CATEGORIES.map((cat, i) => (
        <div
          key={cat.id}
          className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
        >
          <div id={`stack-${cat.id}`} className="pl-4 text-sm/(--badge-height)">
            <span className="mr-1.5 font-mono text-muted-foreground/80 select-none" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            {cat.label}
          </div>
          <ul aria-labelledby={`stack-${cat.id}`} className="flex flex-wrap gap-1.5 px-4">
            {cat.tools.map((tool) => {
              const Icon = tool.icon ?? Box;
              return (
                <li key={tool.name} className="flex">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener"
                    className="flex h-(--badge-height) items-center justify-center gap-1.25 rounded-full bg-zinc-50/80 px-2 font-mono text-xs text-foreground inset-ring-1 inset-ring-border dark:bg-zinc-900/80 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80"
                  >
                    <Icon />
                    {tool.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
