export function OpenToWorkBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-success/20 bg-success/5 text-success text-xs font-medium tracking-wide font-mono select-none">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-40" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
      </span>
      <span>open to work</span>
    </span>
  );
}
