import { CornerPluses } from "./plus";

interface SectionProps {
  id: string;
  title: string;
  count?: number;
  subtitle?: string;
  description?: string;
  pinned?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  count,
  subtitle,
  description,
  pinned = false,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 border-x border-edge screen-line-before screen-line-after ${className}`}
    >
      <CornerPluses bottom />

      <header className="screen-line-after px-4 py-3 sm:px-5">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="section-label font-pixel text-xl font-semibold leading-none sm:text-3xl">
            {title}
          </h2>
          {typeof count === "number" ? (
            <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
              {count}
            </span>
          ) : null}
        </div>
        {subtitle ? (
          <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </header>

      {pinned && description ? (
        <p className="px-4 pt-4 font-sans text-sm leading-relaxed text-muted-foreground sm:px-5">
          {description}
        </p>
      ) : null}

      <div className={`${pinned ? "px-4 pb-6 pt-4 sm:px-5" : "px-4 py-5 sm:px-5"}`}>
        {children}
      </div>
    </section>
  );
}
