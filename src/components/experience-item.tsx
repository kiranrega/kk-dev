"use client";

import { TechChip } from "@/components/skill-icons";
import type { Experience } from "@/types/index";
import React from "react";

export function ExperienceItem({ job, index }: { job: Experience; index: number }) {
  const isCurrent = job.duration === "Current" || job.period.toLowerCase().includes("present");
  
  return (
    <div className="relative pl-6 sm:pl-8 reveal-item group" style={{ "--reveal-index": index } as React.CSSProperties}>
      
      {/* Timeline dot */}
      <div 
        className={`absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-[2.5px] border-background z-10 transition-colors duration-300 ${
          isCurrent 
            ? 'bg-foreground ring-4 ring-foreground/10' 
            : 'bg-muted'
        }`} 
      />
      
      {/* Content */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base font-semibold text-foreground">
          {job.role} <span className="font-normal text-muted-foreground mx-1">·</span> <span className="font-normal text-muted">{job.company}</span>
        </h3>
        <div className="text-sm font-medium text-foreground mt-1 sm:mt-0 whitespace-nowrap">
          {job.period}
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground mt-1">
        {job.location}{job.type ? `, ${job.type}` : ""}
      </div>
      
      <div className="mt-4 text-sm leading-6 text-muted-foreground">
        <ul className="space-y-2">
          {job.bullets.map((bullet: string) => (
            <li key={bullet} className="flex gap-2">
              <span className="text-muted mt-0.5 shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {job.tech.map((t: string) => (
          <TechChip key={t} name={t} />
        ))}
      </div>
    </div>
  );
}
