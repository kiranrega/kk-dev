"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";
import { allSkills, stackGroups } from "@/config/skills";
import { SkillBadge } from "@/components/features/skill-icons";
import styles from "./skills-filter.module.css";

const filters = ["All", ...stackGroups.map((group) => group.title)] as const;
type Filter = (typeof filters)[number];

gsap.registerPlugin(Flip, useGSAP);

export function SkillsFilter() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const rootRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const filterBarRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const buttonRefs = useRef<Partial<Record<Filter, HTMLButtonElement>>>({});
  const visibleGroups =
    activeFilter === "All"
      ? stackGroups
      : stackGroups.filter((group) => group.title === activeFilter);
  const visibleSkills = new Set(visibleGroups.flatMap((group) => group.items));

  const { contextSafe } = useGSAP(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finishAnimation = () => {
      animationRef.current?.progress(1).kill();
      animationRef.current = null;
    };
    reducedMotion.addEventListener("change", finishAnimation);
    window.addEventListener("resize", finishAnimation);
    return () => {
      finishAnimation();
      reducedMotion.removeEventListener("change", finishAnimation);
      window.removeEventListener("resize", finishAnimation);
    };
  }, { scope: rootRef });

  const selectFilter = (filter: Filter) => {
    contextSafe(() => {
      const list = skillsRef.current;
      if (!list || filter === activeFilter) return;

      // Finish an interrupted transition before measuring the next layout.
      animationRef.current?.progress(1).kill();
      animationRef.current = null;
      const items = Array.from(list.querySelectorAll<HTMLElement>("[data-skill]"));
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const state = reducedMotion ? null : Flip.getState(items);
      const previousHeight = list.offsetHeight;

      // Flip needs the committed React layout before it measures final positions.
      flushSync(() => setActiveFilter(filter));
      if (!state) return;
      const nextHeight = list.offsetHeight;

      const animation = Flip.from(state, {
        duration: 0.45,
        ease: "power2.inOut",
        absolute: true,
        scale: true,
        onComplete: () => list.style.removeProperty("height"),
        onEnter: (elements) => gsap.fromTo(elements,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.28, stagger: 0.015, clearProps: "opacity" },
        ),
        onLeave: (elements) => gsap.to(elements, { opacity: 0, duration: 0.16 }),
      });
      // Keep the next section from jumping while the badges reflow.
      animation.fromTo(list, { height: previousHeight }, {
        height: nextHeight,
        duration: 0.45,
        ease: "power2.inOut",
      }, 0);
      animationRef.current = animation;
    })();
  };

  useLayoutEffect(() => {
    const filterBar = filterBarRef.current;
    const indicator = indicatorRef.current;
    const activeButton = buttonRefs.current[activeFilter];

    if (!filterBar || !indicator || !activeButton) return;

    const moveIndicator = () => {
      // Read the layout once before changing styles to avoid repeated reflows.
      const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = activeButton;
      indicator.style.width = `${offsetWidth}px`;
      indicator.style.height = `${offsetHeight}px`;
      indicator.style.transform = `translate3d(${offsetLeft}px, ${offsetTop}px, 0)`;
      indicator.style.opacity = "1";
    };

    moveIndicator();

    const resizeObserver = new ResizeObserver(moveIndicator);
    resizeObserver.observe(filterBar);

    return () => resizeObserver.disconnect();
  }, [activeFilter]);

  return (
    <div ref={rootRef}>
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
              onClick={() => selectFilter(filter)}
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
        ref={skillsRef}
        aria-label={`${activeFilter} skills`}
        aria-live="polite"
        className="relative mt-5 flex min-h-24 flex-wrap content-start items-start gap-2"
      >
        {allSkills.map((skill) => (
          <span
            key={skill}
            data-skill={skill}
            data-flip-id={`skill-${skill}`}
            aria-hidden={!visibleSkills.has(skill)}
            style={{ display: visibleSkills.has(skill) ? "inline-flex" : "none" }}
          >
            <SkillBadge name={skill} />
          </span>
        ))}
      </div>
    </div>
  );
}
