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
  if (pinned) {
    return (
      <section
        id={id}
        className={`scroll-mt-24 py-16 sm:py-24 border-t border-border/80 reveal ${className}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Pinned Left Header Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start space-y-3 pr-2">
            <div className="flex items-center gap-3">
              <h2 className="section-label text-2xl font-bold tracking-tight text-foreground">
                {title}
              </h2>
              {typeof count === "number" ? (
                <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground font-mono bg-neutral-100/50 dark:bg-neutral-900/50">
                  {count}
                </span>
              ) : null}
            </div>

            {subtitle && (
              <p className="text-xs font-mono text-muted uppercase tracking-widest font-medium">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                {description}
              </p>
            )}
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-8 min-w-0">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-12 sm:py-16 border-t border-border/80 reveal ${className}`}
    >
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <h2 className="section-label text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {typeof count === "number" ? (
          <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground font-mono bg-neutral-100/50 dark:bg-neutral-900/50">
            {count}
          </span>
        ) : null}
      </div>
      {children}
    </section>
  );
}
