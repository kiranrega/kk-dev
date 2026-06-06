"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

function parseNumber(value: string): { prefix: string; num: number; suffix: string } {
  // "3+ years" → prefix="", num=3, suffix="+ years"
  // "-25%"     → prefix="-", num=25, suffix="%"
  // "+30%"     → prefix="+", num=30, suffix="%"
  // "80%+"     → prefix="", num=80, suffix="%+"
  const match = value.match(/^([+\-]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value };
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
}

function CountUp({ value, active }: { value: string; active: boolean }) {
  const { prefix, num, suffix } = parseNumber(value);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);
  const duration = 1400;

  useEffect(() => {
    if (!active) return;
    
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplay(num);
      return;
    }

    startRef.current = null;

    function step(ts: number) {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * num));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, num]);

  // Render as a single nowrap string so "3+ years" never wraps mid-value
  return (
    <span className="whitespace-nowrap">
      {`${prefix}${display}${suffix}`}
    </span>
  );
}

export function StatsBand({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-px sm:grid-cols-4 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center gap-1 bg-white px-4 py-6 dark:bg-zinc-950"
        >
          <p className="stat-number font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 whitespace-nowrap">
            <CountUp value={stat.value} active={active} />
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center uppercase tracking-widest">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
