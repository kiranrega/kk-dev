export function Card({
  children,
  className,
  style,
  as: Component = "div",
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "article";
  variant?: "default" | "project" | "experience" | "profile";
}) {
  return (
    <Component
      data-variant={variant}
      className={[
        "portfolio-card",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </Component>
  );
}
