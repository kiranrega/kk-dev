"use client";

import { useEffect, useState } from "react";

const API_BASE = "https://api.counterapi.dev/v2/kiran-kumar-regas-team-4807/first-counter-4807";
const API_KEY = process.env.NEXT_PUBLIC_COUNTER_API_KEY;

export function VisitorCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    if (!API_KEY) {
      setViews(0);
      return;
    }

    // Increment the counter
    fetch(`${API_BASE}/up`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setViews(data.count ?? 0))
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
