"use client";

import { useEffect, useRef } from "react";
import { useActiveSection } from "@/hooks/use-active-section";

const sections = [
  { id: "overview", label: "Home" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];
const sectionIds = sections.map((section) => section.id);

function SlidingDot({
  activeIndex,
  direction,
}: {
  activeIndex: number;
  direction: "vertical" | "horizontal";
}) {
  const dotRef = useRef<HTMLSpanElement>(null);
  const previousIndex = useRef(activeIndex);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || previousIndex.current === activeIndex) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const from =
      direction === "vertical"
        ? `translateY(${previousIndex.current * 2.125}rem)`
        : `translateX(${previousIndex.current * 100}%)`;
    const to =
      direction === "vertical"
        ? `translateY(${activeIndex * 2.125}rem)`
        : `translateX(${activeIndex * 100}%)`;

    previousIndex.current = activeIndex;

    if (prefersReducedMotion) return;

    const animation = dot.animate(
      [{ transform: from }, { transform: to }],
      {
        duration: 500,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      }
    );

    return () => animation.cancel();
  }, [activeIndex, direction]);

  const transform =
    direction === "vertical"
      ? `translateY(${activeIndex * 2.125}rem)`
      : `translateX(${activeIndex * 100}%)`;

  return (
    <span
      ref={dotRef}
      aria-hidden="true"
      className={`sidebar-menu-dot pointer-events-none absolute top-0 flex h-8 items-center text-foreground ${
        direction === "vertical" ? "left-0 w-7 justify-center" : "left-0 w-1/4"
      }`}
      style={{ transform }}
    >
      <span className={`size-1.5 rounded-full bg-current ${direction === "horizontal" ? "ml-[0.6875rem]" : ""}`} />
    </span>
  );
}

function SectionLink({
  section,
  active,
}: {
  section: (typeof sections)[number];
  active: boolean;
}) {
  return (
    <a
      href={`#${section.id}`}
      aria-current={active ? "location" : undefined}
      className={`inline-flex h-8 items-center whitespace-nowrap rounded-sm pl-7 pr-2.5 font-mono font-bold text-xs transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
        active
          ? "text-foreground"
          : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
      }`}
    >
      <span>{section.label}</span>
    </a>
  );
}

export function FloatingTOC() {
  const activeSection = useActiveSection(sectionIds);
  const activeIndex = Math.max(0, sectionIds.indexOf(activeSection));

  return (
    <>
      <aside className="pointer-events-none fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 xl:left-[calc(50%_-_37rem)] xl:block">
        <nav
          aria-label="Section navigation"
          className="sidebar-menu-enter pointer-events-auto w-44 rounded-md border border-border/70 bg-card/80 p-1.5 shadow-sm backdrop-blur-xl"
        >
          <p className="px-2.5 pb-1.5 pt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Navigate
          </p>
          <div className="relative flex flex-col gap-0.5">
            <SlidingDot activeIndex={activeIndex} direction="vertical" />
            {sections.map((section, index) => (
              <SectionLink
                key={section.id}
                section={section}
                active={activeIndex === index}
              />
            ))}
          </div>
        </nav>
      </aside>

      <nav
        aria-label="Section navigation"
        className="sidebar-menu-enter -mx-2 mb-3 overflow-x-auto px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:hidden"
      >
        <div className="min-w-[28rem] rounded-md border border-border/70 bg-card/80 p-1 backdrop-blur-xl">
          <div className="relative grid grid-cols-4">
            <SlidingDot activeIndex={activeIndex} direction="horizontal" />
            {sections.map((section, index) => (
              <SectionLink
                key={section.id}
                section={section}
                active={activeIndex === index}
              />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
