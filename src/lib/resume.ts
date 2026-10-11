export function getResumePreviewUrl(downloadUrl: string, previewUrl = ""): string | null {
  const source = previewUrl.trim() || downloadUrl.trim();

  if (!source) return null;
  if (/^\/(?!\/)/.test(source)) return source;

  try {
    const url = new URL(source);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;

    // Drive's download endpoint cannot be embedded; its preview displays every page.
    if (url.hostname === "drive.google.com") {
      const fileId = url.pathname.match(/^\/file\/d\/([\w-]+)/)?.[1] || url.searchParams.get("id");

      if (fileId && /^[\w-]+$/.test(fileId)) {
        const preview = new URL(`https://drive.google.com/file/d/${fileId}/preview`);
        const resourceKey = url.searchParams.get("resourcekey");
        if (resourceKey) preview.searchParams.set("resourcekey", resourceKey);
        return preview.href;
      }
    }

    return url.href;
  } catch {
    return null;
  }
}
