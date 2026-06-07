import Link from "next/link";
import { ExternalLink, GitPullRequest, Globe } from "lucide-react";
import { TechChip } from "@/components/skill-icons";
import type { Project } from "@/types/index";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div 
      className="group reveal-item border-b border-border py-8 first:pt-0 last:border-0 transition-colors"
      style={{ "--reveal-index": index } as React.CSSProperties}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-muted-foreground transition-colors">
              {project.name}
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-card px-2 py-0.5 rounded">
              {project.platform}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
            {project.description}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-foreground hover:opacity-70 transition-all"
              >
                Live <Globe size={14} />
              </Link>
            ) : null}
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all"
              >
                Code <GitPullRequest size={14} />
              </Link>
            ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 transition-opacity duration-300 opacity-60 group-hover:opacity-100">
        {project.tech.map((item: string) => (
          <TechChip key={item} name={item} />
        ))}
      </div>
    </div>
  );
}
