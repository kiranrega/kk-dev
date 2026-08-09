"use client";

import { TechChip } from "@/components/features/skill-icons";
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
      className="relative pl-6 sm:pl-8 group"
      style={{ "--reveal-index": index } as React.CSSProperties}
    >
      {/* Timeline Node Ring */}
      <div
        className={`absolute -left-[5px] top-7 h-3 w-3 rounded-full border-2 border-background z-10 transition-all duration-300 group-hover:scale-125 ${
          isCurrent
            ? "bg-emerald-500 ring-4 ring-emerald-500/20"
            : "bg-neutral-400 dark:bg-neutral-600 group-hover:bg-foreground"
        }`}
      />

      {/* Experience Glass Card Container with Spring Physics */}
      <div className="rounded-2xl bg-neutral-100/40 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 p-5 sm:p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg dark:hover:shadow-black/20 group-hover:scale-[1.01]">
        {/* Role & Company Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-3 mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {job.role}
            </h3>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mt-0.5">
              <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                <Building2 size={13} className="shrink-0 text-muted-foreground" />
                {job.company}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} className="shrink-0" />
                {job.location}
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300/60 dark:border-neutral-700/60 text-xs font-mono text-foreground font-medium self-start sm:self-auto shrink-0">
            <Calendar size={12} className="shrink-0 text-muted-foreground" />
            <span>{job.period}</span>
          </div>
        </div>

        {/* Bullets with GSAP Word-by-Word Scroll Opacity Scrubbing */}
        <div className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {job.bullets.map((bullet: string, i: number) => (
            <div key={i} className="flex gap-2.5 items-start">
              <span className="text-neutral-400 dark:text-neutral-600 mt-1 shrink-0 font-bold">
                ↳
              </span>
              <GSAPScrubText className="flex-1">{bullet}</GSAPScrubText>
            </div>
          ))}
        </div>

        {/* Tech Chips */}
        <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5">
          {job.tech.map((t: string) => (
            <TechChip key={t} name={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
