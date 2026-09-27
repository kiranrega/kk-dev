export function Plus({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute z-10 ${className}`}
      aria-hidden
    >
      <div className="relative flex size-3 items-center justify-center">
        <div className="absolute h-px w-full bg-zinc-300 dark:bg-zinc-500" />
        <div className="absolute h-full w-px bg-zinc-300 dark:bg-zinc-500" />
      </div>
    </div>
  );
}

export function CornerPluses({ bottom = false }: { bottom?: boolean }) {
  return (
    <>
      <Plus className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <Plus className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      {bottom ? (
        <>
          <Plus className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
          <Plus className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
        </>
      ) : null}
    </>
  );
}
