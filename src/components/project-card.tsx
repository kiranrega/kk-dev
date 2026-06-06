import Link from "next/link";
import { ExternalLink, GitPullRequest, Globe } from "lucide-react";
import { TechChip } from "@/components/skill-icons";
import type { Project } from "@/types/index";

function Card({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={[
        "group relative rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-500 ease-out dark:border-zinc-800 dark:bg-[#0a0a0a] hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-xl dark:hover:shadow-zinc-950/50 hover:-translate-y-1",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {/* Background subtle glow effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-100 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-zinc-900/50 rounded-3xl" />
      {children}
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isProd = project.type === "Production" || project.type === "Enterprise";

  return (
    <div className="reveal-item" style={{ "--reveal-index": index } as React.CSSProperties}>
      <Card>
        {/* Header Metadata */}
        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex rounded-full bg-zinc-950 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white dark:bg-white dark:text-black transition-transform duration-300 group-hover:scale-105">
            {project.type}
          </span>

          <span className="inline-flex rounded-full border border-zinc-200 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
            {project.role}
          </span>

          <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-600">
            {project.platform}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white transition-colors duration-300 group-hover:text-black dark:group-hover:text-zinc-100">
            {project.name}
          </h3>
          <p className="text-[0.93rem] leading-relaxed text-zinc-600 dark:text-zinc-400 transition-colors duration-300 group-hover:text-zinc-800 dark:group-hover:text-zinc-300">
            {project.description}
          </p>
        </div>

        {/* Technical Brief (Collapsible-style appearance) */}
        {isProd && (project.challenge || project.outcome) ? (
          <div className="mt-8 space-y-4 rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-900/30 transition-colors duration-300 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900/50">
            {project.challenge ? (
              <div className="space-y-1.5">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">Challenge</span>
                <p className="text-[0.82rem] leading-normal text-zinc-600 dark:text-zinc-400 font-medium">{project.challenge}</p>
              </div>
            ) : null}
            {project.outcome ? (
              <div className="space-y-1.5 border-t border-zinc-200/50 pt-4 dark:border-zinc-800/50">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">Outcome</span>
                <p className="text-[0.82rem] leading-normal text-zinc-900 dark:text-zinc-100 font-bold">{project.outcome}</p>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* Tech Stack Chips */}
        <div className="mt-8 flex flex-wrap gap-2 transition-opacity duration-300 group-hover:opacity-100">
          {project.tech.map((item: string) => (
            <TechChip key={item} name={item} />
          ))}
        </div>

        {/* Action Links */}
        {project.githubUrl || project.liveUrl ? (
          <div className="mt-8 flex flex-wrap gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-900">
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-900 dark:text-white hover:opacity-70 transition-all duration-300"
              >
                <Globe size={16} className="transition-transform duration-300 group-hover/link:rotate-12" />
                Live Project
                <ExternalLink size={14} className="transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            ) : null}
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all duration-300"
              >
                <GitPullRequest size={16} className="transition-transform duration-300 group-hover/link:-rotate-12" />
                Source Code
                <ExternalLink size={14} className="opacity-0 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            ) : null}
          </div>
        ) : null}
      </Card>
    </div>
  );
}
