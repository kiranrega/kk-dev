'use client';

import { useEffect, useState } from 'react';

interface VisitorCounterProps {
  username: string;
  token: string;
}

export function VisitorCounter({ username, token }: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (username === 'YOUR_USERNAME') return;

    fetch(`https://counter.dev/get?token=${token}&user=${username}&period=all`)
      .then((res) => res.json())
      .then((data) => {
        const visitors = data.visitors ?? data.visits ?? data.count ?? 0;
        setCount(visitors);
      })
      .catch(() => setCount(0));
  }, [username, token]);

  return (
    <span className="text-muted-foreground">
      Visitors{' '}
      <span className="font-semibold text-foreground">
        #{count !== null ? count.toLocaleString() : '---'}
      </span>
    </span>
  );
}