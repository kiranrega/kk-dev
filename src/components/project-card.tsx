import Link from "next/link";
import { ExternalLink, GitPullRequest, Globe } from "lucide-react";
import { TechChip } from "@/components/skill-icons";
import type { Project } from "@/types/index";

function Card({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={[
        "rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/[0.02] dark:border-zinc-800 dark:bg-zinc-950",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isProd = project.type === "Production" || project.type === "Enterprise";
  const roleColor = project.role === "Lead Dev" || project.role === "Lead" ? "var(--accent)" : "var(--text-muted)";
  const roleBorder = project.role === "Lead Dev" || project.role === "Lead" ? "1px solid var(--accent-40)" : "1px solid var(--border)";

  return (
    <div className="reveal-item" style={{ "--reveal-index": index } as React.CSSProperties}>
      <Card>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            style={{
              background: project.type === "Production" ? "var(--accent-10)" : project.type === "Enterprise" ? "rgba(255,255,255,0.04)" : "transparent",
              border: project.type === "Production" ? "1px solid var(--accent-40)" : project.type === "Enterprise" ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--border)",
              color: project.type === "Production" ? "var(--accent)" : project.type === "Enterprise" ? "var(--text-muted)" : "var(--text-muted)",
            }}
            className="inline-flex rounded-full px-2.5 py-1 text-xs font-medium"
          >
            {project.type}
          </span>

          <span
            style={{
              border: roleBorder,
              color: roleColor,
            }}
            className="inline-flex rounded-full px-2.5 py-1 text-xs font-medium"
          >
            {project.role}
          </span>

          <span className="ml-auto inline-flex rounded-full border border-zinc-200/50 bg-zinc-50/40 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800/50 dark:bg-zinc-900/30 dark:text-zinc-400">
            {project.platform}
          </span>
        </div>

        <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">{project.name}</h3>

        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {isProd && (project.challenge || project.outcome) ? (
          <div className="mt-4 border-l-2 border-zinc-200 pl-3 dark:border-zinc-800">
            {project.challenge ? (
              <div className="text-xs leading-5">
                <span className="font-medium text-zinc-500 dark:text-zinc-500">Challenge: </span>
                <span className="text-zinc-600 dark:text-zinc-400">{project.challenge}</span>
              </div>
            ) : null}
            {project.outcome ? (
              <div className="mt-1 text-xs leading-5">
                <span className="font-medium" style={{ color: "var(--accent)" }}>
                  Outcome:{" "}
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">{project.outcome}</span>
              </div>
            ) : null}
          </div>
        ) : null}

        {project.keyResult ? (
          <div className="mt-4 flex flex-wrap gap-4">
            {project.keyResult.split(" · ").map((metric: string) => (
              <div key={metric} className="text-sm">
                <span style={{ color: "var(--accent)" }} className="font-semibold">
                  {metric}
                </span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((item: string) => (
            <TechChip key={item} name={item} />
          ))}
        </div>

        {project.githubUrl || project.liveUrl ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
              >
                <Globe size={14} aria-hidden="true" />
                Live
                <ExternalLink size={13} aria-hidden="true" />
              </Link>
            ) : null}
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:outline-zinc-50"
              >
                <GitPullRequest size={14} aria-hidden="true" />
                GitHub
                <ExternalLink size={13} aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        ) : null}
      </Card>
    </div>
  );
}
