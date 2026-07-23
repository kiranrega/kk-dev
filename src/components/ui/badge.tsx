export function OpenToWorkBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium tracking-wide hero-font-mono select-none">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>
      <span>open to work</span>
    </span>
  );
}
