'use client';

import { useEffect, useState } from 'react';

interface Quote {
  quote: string;
  author: string;
}

export function RandomQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then((res) => res.json())
      .then((data: Quote) => setQuote(data))
      .catch(() => setQuote({ quote: 'Life is Enjoy', author: 'Mahan Admi (WanderDa)' }));
  }, []);

  if (!quote) return null;

  return (
    <div className="py-16 text-center border-t border-border">
      <p className="text-lg italic text-muted-foreground">&quot;{quote.quote}&quot;</p>
      <p className="mt-2 text-sm text-muted">— {quote.author}</p>
    </div>
  );
}