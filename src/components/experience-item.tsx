"use client";

import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { TechChip } from "@/components/skill-icons";
import type { Experience } from "@/types/index";

function Card({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={[
        "rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-950/[0.02] dark:border-zinc-800 dark:bg-zinc-950",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

export function ExperienceItem({ job, index }: { job: Experience; index: number }) {
  const [open, setOpen] = useState(false);
  const initialCount = 3;

  return (
    <div className="reveal-item" style={{ "--reveal-index": index } as React.CSSProperties}>
      <Card>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-md bg-zinc-900 dark:bg-zinc-800 grid place-items-center text-white text-sm font-bold">
                {job.company.slice(0, 2)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">{job.company}</h3>
                  {job.duration === "Current" ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-600/10 border border-green-700 text-green-400 px-2 py-0.5 text-xs">
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      Working
                    </span>
                  ) : null}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{job.role}</p>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">{job.period}</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {job.location} {job.type ? `· ${job.type}` : ""}
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-wrap gap-2">
            {job.tech.map((t: string) => (
              <TechChip key={t} name={t} />
            ))}
          </div>
        </div>

        <hr className="my-4 border-zinc-200 dark:border-zinc-800" />

        <div>
          <h4 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">What I&apos;ve done</h4>
          <ul className="mt-3 grid gap-2">
            {job.bullets.slice(0, open ? job.bullets.length : initialCount).map((bullet: string) => (
              <li key={bullet} className="flex gap-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                <Star size={14} className="mt-1.5 shrink-0 text-zinc-400" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {job.bullets.length > initialCount ? (
            <div className="mt-3">
              <button
                type="button"
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                className="inline-flex items-center gap-2 rounded-md border border-zinc-700/30 bg-zinc-100/40 px-3 py-2 text-sm font-medium text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50"
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
                {open ? "Show less" : "Show more"}
              </button>
            </div>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
