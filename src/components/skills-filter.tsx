"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { stackGroups } from "@/config/skills";
import { SkillBadge } from "@/components/features/skill-icons";
import styles from "./skills-filter.module.css";

const filters = ["All", ...stackGroups.map((group) => group.title)] as const;
type Filter = (typeof filters)[number];

export function SkillsFilter() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filterBarRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const buttonRefs = useRef<Partial<Record<Filter, HTMLButtonElement>>>({});
  const visibleGroups =
    activeFilter === "All"
      ? stackGroups
      : stackGroups.filter((group) => group.title === activeFilter);
  const visibleSkills = visibleGroups.flatMap((group) => group.items);

  useLayoutEffect(() => {
    const filterBar = filterBarRef.current;
    const indicator = indicatorRef.current;
    const activeButton = buttonRefs.current[activeFilter];

    if (!filterBar || !indicator || !activeButton) return;

    const moveIndicator = () => {
      indicator.style.width = `${activeButton.offsetWidth}px`;
      indicator.style.height = `${activeButton.offsetHeight}px`;
      indicator.style.transform = `translate3d(${activeButton.offsetLeft}px, ${activeButton.offsetTop}px, 0)`;
      indicator.style.opacity = "1";
    };

    moveIndicator();

    const resizeObserver = new ResizeObserver(moveIndicator);
    resizeObserver.observe(filterBar);

    return () => resizeObserver.disconnect();
  }, [activeFilter]);

  return (
    <div>
      <div
        ref={filterBarRef}
        role="group"
        aria-label="Filter skills by category"
        className="relative inline-flex max-w-full flex-wrap items-center justify-start gap-1 rounded-md border border-border bg-card/70 p-1 font-bold"
      >
        <span
          ref={indicatorRef}
          aria-hidden="true"
          className={`${styles.indicator} pointer-events-none absolute left-0 top-0 rounded-sm bg-foreground opacity-0`}
        />
        {filters.map((filter) => {
          const selected = filter === activeFilter;

          return (
            <button
              key={filter}
              ref={(button) => {
                buttonRefs.current[filter] = button ?? undefined;
              }}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveFilter(filter)}
              className={`relative z-10 inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-sm px-3 font-mono text-xs transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                selected
                  ? "text-background"
                  : "text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
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
