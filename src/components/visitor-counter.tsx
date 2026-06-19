interface VisitorCounterProps {
  repo: string;
}

export function VisitorCounter({ repo }: VisitorCounterProps) {
  const trackUrl = `https://hits.sh/github.com/${repo}`;
  const badgeUrl = `https://hits.sh/github.com/${repo}.svg?style=flat-square&label=&color=555`;

  return (
    <a
      href={trackUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 group"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={badgeUrl}
        alt="Visitor count"
        className="h-4 opacity-70 group-hover:opacity-100 transition-opacity"
      />
    </a>
  );
}
