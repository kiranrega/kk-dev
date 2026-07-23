export function Card({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={[
        "bg-card p-5 shadow-sm transition-all duration-200",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
