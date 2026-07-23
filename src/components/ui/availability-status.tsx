"use client";

export function AvailabilityStatus() {
  return (
    <div className="flex items-center gap-2 font-mono text-[13px]">
      <span className="text-muted-foreground">❯</span>
      <span className="text-emerald-500">status</span>
      <span className="text-muted-foreground">=</span>
      <span className="text-foreground">"available_for_work"</span>
      <span className="relative flex h-1.5 w-1.5 ml-1">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>
    </div>
  );
}
