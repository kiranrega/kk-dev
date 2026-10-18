"use client";

import { Card } from "@/components/layout/card";
import { SkillBadge } from "@/components/features/skill-icons";
import { GSAPScrubText } from "@/components/features/gsap-scrub-text";
import type { Experience } from "@/types";
import { Building2, Calendar, MapPin } from "lucide-react";

export function ExperienceItem({
  job,
  index,
}: {
  job: Experience;
  index: number;
}) {
  const isCurrent =
    job.duration === "Current" || job.period.toLowerCase().includes("present");

  return (
    <div
      className="group"
      style={{ "--reveal-index": index } as React.CSSProperties}
    >
      {/* Shared card surface and interaction states */}
      <Card variant="experience">
        {/* Role & Company Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-3 mb-4">
          <div>
            <h3 className="type-card-title">
              {job.role}
            </h3>
            <div className="type-meta flex flex-wrap items-center gap-2 mt-0.5">
              <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                <Building2 size={13} className="shrink-0 text-muted-foreground" />
                {job.company}
              </span>
              {isCurrent ? (
                <span className="inline-flex items-center gap-1.5 text-success">
                  <span aria-hidden className="size-1.5 rounded-full bg-success animate-pulse" />
                  Current role
                </span>
              ) : null}
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} className="shrink-0" />
                {job.location}
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border type-meta font-medium self-start sm:self-auto shrink-0">
            <Calendar size={12} className="shrink-0 text-muted-foreground" />
            <span>{job.period}</span>
          </div>
        </div>

        {/* Bullets with GSAP Word-by-Word Scroll Opacity Scrubbing */}
        <div className="type-body space-y-2.5">
          {job.bullets.map((bullet: string, i: number) => (
            <div key={i} className="flex gap-2.5 items-start">
              <span className="text-muted-foreground mt-1 shrink-0 font-bold">
                ↳
              </span>
              <GSAPScrubText className="flex-1">{bullet}</GSAPScrubText>
            </div>
          ))}
        </div>

        {/* Tech Chips */}
        <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5">
          {job.tech.map((t: string) => (
            <SkillBadge key={t} name={t} />
          ))}
        </div>
      </Card>
    </div>
  );
}
