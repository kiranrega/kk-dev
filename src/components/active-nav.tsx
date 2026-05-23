"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

export function ActiveNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sectionIds = items
      .map((i) => i.href.replace("#", ""))
      .filter(Boolean);

    const observers: IntersectionObserver[] = [];

    // Track which sections are currently visible
    const visible = new Set<string>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.add(id);
          } else {
            visible.delete(id);
          }
          // Pick the first visible section in document order
          const first = sectionIds.find((s) => visible.has(s));
          if (first) setActive(first);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav className="flex min-w-0 items-center gap-1 overflow-x-auto" aria-label="Primary navigation">
      {items.map((item) => {
        const id = item.href.replace("#", "");
        const isActive = active === id;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "relative shrink-0 rounded-lg px-2.5 py-2 text-sm transition",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-zinc-50",
              isActive
                ? "text-zinc-950 dark:text-zinc-50 [color:var(--accent)]"
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50",
            ].join(" ")}
          >
            {item.label}
            {isActive && (
              <span className="nav-active-bar absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
