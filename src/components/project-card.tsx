import Link from "next/link";
import { ExternalLink, GitPullRequest, Globe } from "lucide-react";
import { TechChip } from "@/components/skill-icons";
import type { Project } from "@/types/index";

function Card({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={[
        "group relative rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-500 ease-out hover:border-muted hover:shadow-xl dark:hover:shadow-accent/5 hover:-translate-y-1",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {/* Background subtle glow effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />
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
          <span className="inline-flex rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-background transition-transform duration-300 group-hover:scale-105">
            {project.type}
          </span>

          <span className="inline-flex rounded-full border border-border px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            {project.role}
          </span>

          <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
            {project.platform}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-[0.93rem] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
            {project.description}
          </p>
        </div>

        {/* Technical Brief (Collapsible-style appearance) */}
        {isProd && (project.challenge || project.outcome) ? (
          <div className="mt-8 space-y-4 rounded-2xl bg-muted/5 p-5 transition-colors duration-300 group-hover:bg-muted/10">
            {project.challenge ? (
              <div className="space-y-1.5">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted">Challenge</span>
                <p className="text-[0.82rem] leading-normal text-muted-foreground font-medium">{project.challenge}</p>
              </div>
            ) : null}
            {project.outcome ? (
              <div className="space-y-1.5 border-t border-border pt-4">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted">Outcome</span>
                <p className="text-[0.82rem] leading-normal text-foreground font-bold">{project.outcome}</p>
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
          <div className="mt-8 flex flex-wrap gap-4 border-t border-border pt-6">
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground hover:opacity-70 transition-all duration-300"
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
                className="group/link inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all duration-300"
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
