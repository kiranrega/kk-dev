"use client";

import { useEffect, useState } from "react";

const API_BASE = "/api/counter";

export function VisitorCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Increment the counter (public counter, no auth needed)
    fetch(`${API_BASE}/up`)
      .then((res) => res.json())
      .then((res) => setViews(res.data.up_count ?? 0))
      .catch(() => setViews(0));
  }, []);

  if (views === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted font-mono">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      {views.toLocaleString()} views
    </span>
  );
}
