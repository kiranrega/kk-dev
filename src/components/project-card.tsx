import { ExternalLink } from "lucide-react";
import { TechChip } from "@/components/skill-icons";
import type { Project } from "@/types/index";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="group relative"
      style={{ "--reveal-index": index } as React.CSSProperties}
    >
      {/* Top row: name + links */}
      <div className="flex items-start justify-between gap-4 mb-1.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <h3 className="text-[15px] font-medium text-foreground truncate">
            {project.name}
          </h3>
          <span className="text-[11px] text-muted-foreground font-mono shrink-0">
            {project.role}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              aria-label={`${project.name} GitHub`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1.52 5.09 3A5.07 5.07 0 0 0 5 12 5.07 5.07 0 0 0 5.14 19z"/>
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink size={15} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      {/* Key result */}
      {project.keyResult && (
        <p className="text-[12px] font-mono text-emerald-600 dark:text-emerald-400 mb-2">
          {project.keyResult}
        </p>
      )}

      {/* Description */}
      <p className="text-[13px] leading-relaxed text-muted-foreground max-w-[540px] mb-3">
        {project.description}
      </p>

      {/* Tech + type badge */}
      <div className="flex items-center gap-3 flex-wrap">
        {project.tech.map((tech) => (
          <TechChip key={tech} name={tech} />
        ))}
        <span className="text-[10px] font-mono text-muted uppercase tracking-wider ml-auto">
          {project.type}
        </span>
      </div>

      {/* Bottom border — full width, subtle */}
      <div className="mt-4 border-b border-border/50" />
    </article>
  );
}
