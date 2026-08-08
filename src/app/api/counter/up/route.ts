const UPSTREAM = process.env.COUNTER_UPSTREAM || 'https://api.counterapi.dev/v2/kiran-kumar-regas-team-4807/first-counter-4807/up';

export async function GET() {
  const res = await fetch(UPSTREAM, { cache: 'no-store' });
  const body = await res.text();

  return new Response(body, {
    status: res.status,
    headers: { 'content-type': res.headers.get('content-type') ?? 'application/json' },
  });
}

export async function POST(req: Request) {
  const res = await fetch(UPSTREAM, { method: 'POST', body: await req.text(), headers: { 'content-type': req.headers.get('content-type') ?? 'application/json' } });
  const body = await res.text();

  return new Response(body, {
    status: res.status,
    headers: { 'content-type': res.headers.get('content-type') ?? 'application/json' },
  });
}
