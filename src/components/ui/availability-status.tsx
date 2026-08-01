"use client";

export function AvailabilityStatus() {
  return (
    <div className="flex items-center gap-2 font-mono text-sm">
      <span className="text-muted-foreground">❯</span>
      <span className="text-success">status</span>
      <span className="text-muted-foreground">=</span>
      <span className="text-foreground text-green-500">"available_for_work"</span>
      <span className="relative flex h-1.5 w-1.5 ml-1">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
      </span>
    </div>
  );
}
