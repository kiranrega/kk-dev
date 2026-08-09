"use client";

import { ExternalLink } from "lucide-react";
import { TechChip } from "@/components/features/skill-icons";
import { GSAPScrubText } from "@/components/features/gsap-scrub-text";
import type { Project } from "@/types";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className="group relative rounded-2xl bg-neutral-100/40 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 p-5 sm:p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl dark:hover:shadow-black/30 group-hover:scale-[1.01]"
      style={{ "--reveal-index": index } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex flex-wrap items-center gap-2.5 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <span className="text-xs text-muted-foreground font-mono px-2 py-0.5 rounded-md bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300/50 dark:border-neutral-700/50 shrink-0">
            {project.role}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-muted-foreground hover:text-foreground hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-all"
              aria-label={`${project.name} GitHub`}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1.52 5.09 3A5.07 5.07 0 0 0 5 12 5.07 5.07 0 0 0 5.14 19z" />
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-muted-foreground hover:text-foreground hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-all"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {project.keyResult && (
        <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-3 flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {project.keyResult}
        </p>
      )}

      {/* GSAP Word-by-Word Scroll Opacity Scrubbing */}
      <GSAPScrubText className="text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 mb-4">
        {project.description}
      </GSAPScrubText>

      <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-border/40">
        {project.tech.map((tech) => (
          <TechChip key={tech} name={tech} />
        ))}
        <span className="text-[10px] font-mono text-muted uppercase tracking-wider ml-auto">
          {project.type}
        </span>
      </div>
    </article>
  );
}
