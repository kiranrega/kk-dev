"use client";

import { useState } from "react";
import { stackGroups } from "@/config/skills";
import { SkillBadge } from "@/components/features/skill-icons";

const filters = ["All", ...stackGroups.map((group) => group.title)] as const;
type Filter = (typeof filters)[number];

export function SkillsFilter() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visibleGroups =
    activeFilter === "All"
      ? stackGroups
      : stackGroups.filter((group) => group.title === activeFilter);
  const visibleSkills = visibleGroups.flatMap((group) => group.items);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter skills by category"
        className="flex flex-wrap gap-1 rounded-md border border-border bg-muted/10 p-1"
      >
        {filters.map((filter) => {
          const selected = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveFilter(filter)}
              className={`min-h-9 rounded-sm px-3 font-mono text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                selected
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div
        aria-label={`${activeFilter} skills`}
        aria-live="polite"
        className="mt-5 flex min-h-24 flex-wrap content-start gap-2"
      >
        {visibleSkills.map((skill, index) => (
          <span
            key={`${activeFilter}-${skill}`}
            className="skill-chip-enter inline-flex"
            style={{ animationDelay: `${index * 35}ms` }}
          >
            <SkillBadge name={skill} />
          </span>
        ))}
      </div>
    </div>
  );
}
