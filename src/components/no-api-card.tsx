'use client';

import { useEffect, useState } from 'react';

/**
 * Fetches data from https://naas.isalman.dev/no and displays the response
 * inside a styled card at the bottom of the portfolio page.
 */
export function NoApiCard() {
  const [data, setData] = useState<string>('Loading...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Use the public endpoint; assume it returns plain text or JSON.
    fetch('https://naas.isalman.dev/no')
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        // Try JSON first, fallback to text.
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          const json = await res.json();
          return JSON.stringify(json, null, 2);
        }
        return await res.text();
      })
      .then((result) => setData(result))
      .catch((e) => {
        console.error(e);
        setError(e.message);
        setData('');
      });
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm mt-10">
      <h3 className="mb-2 text-lg font-medium">API Response</h3>
      {error ? (
        <p className="text-sm text-red-500">Error: {error}</p>
      ) : (
        <pre className="whitespace-pre-wrap text-sm text-foreground bg-muted rounded p-2 overflow-x-auto">
          {data}
        </pre>
      )}
    </div>
  );
}
