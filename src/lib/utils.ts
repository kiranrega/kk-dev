export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getSafeUrl(url: string | undefined, fallback: string = "#"): string {
  if (!url) return fallback;
  const sanitized = url.trim();
  // Prevent javascript: or data: protocols to block XSS vector
  if (/^(javascript|data):/i.test(sanitized)) {
    return fallback;
  }
  return sanitized;
}

