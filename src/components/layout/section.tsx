interface SectionProps {
  id: string;
  title: string;
  count?: number;
  children: React.ReactNode;
}

export function Section({ id, title, count, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-10 border-t border-border reveal">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <h2 className="section-label">{title}</h2>
        {typeof count === "number" ? (
          <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
            {count}
          </span>
        ) : null}
      </div>
      {children}
    </section>
  );
}
