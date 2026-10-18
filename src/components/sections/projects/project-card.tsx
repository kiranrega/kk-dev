"use client";

import { Card } from "@/components/layout/card";
import { ExternalLink } from "lucide-react";
import { SkillBadge } from "@/components/features/skill-icons";
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
    <Card
      as="article"
      variant="project"
      className="group relative"
      style={{ "--reveal-index": index } as React.CSSProperties}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap items-center gap-2.5 min-w-0">
          <h3 className="type-card-title">
            {project.name}
          </h3>
          <span className="type-meta px-2 py-0.5 rounded-md bg-muted border border-border">
            {project.role}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="icon-button"
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
              className="icon-button"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {project.keyResult && (
        <p className="text-xs font-mono text-success font-semibold mb-3 flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-success animate-pulse" />
          {project.keyResult}
        </p>
      )}

      {/* GSAP Word-by-Word Scroll Opacity Scrubbing */}
      <GSAPScrubText className="type-body mb-4">
        {project.description}
      </GSAPScrubText>

      <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-border/40">
        {project.tech.map((tech) => (
          <SkillBadge key={tech} name={tech} />
        ))}
        <span className="type-meta uppercase tracking-wider ml-auto">
          {project.type}
        </span>
      </div>
    </Card>
  );
}
