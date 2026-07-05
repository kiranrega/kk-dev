import { Briefcase } from "lucide-react";

export function OpenToWorkBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-medium uppercase tracking-wider hero-font-mono select-none hover:bg-emerald-500/10 transition-colors duration-300">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span>Open to work</span>
    </div>
  );
}
