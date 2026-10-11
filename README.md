# Kiran Kumar Rega Portfolio

Portfolio rebuilt around the compact profile-document style

## Direction

The site intentionally follows a narrow, resume-first portfolio format:

- compact top navigation
- command palette search
- avatar/profile opening
- overview card
- social/contact links
- about bullets
- stack chips
- experience timeline cards
- project cards
- recognition
- education
- contact actions

The requested exclusions are not included: components, blocks, blog, sponsors, bookmarks, and certifications.
## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion dependency retained, though the current design keeps motion minimal
- Lucide React icons

## Structure

```txt
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    command-menu.tsx
  data/
    portfolio.ts
  lib/
    utils.ts
```

## Commands

```bash
npm run dev
npm run lint
npm run build
```

## Resume popup

The **Resume** button in the profile's social row opens the complete PDF inside
the resume popup. The viewer loads only when the popup is opened.
Set `siteConfig.links.resume` in `src/config/site.ts` to your public PDF download
URL, or override it with `NEXT_PUBLIC_RESUME_URL`. Use a direct download link for
externally hosted files; the file host controls whether the browser downloads
the file or opens it in a new tab.

Google Drive download and share links are automatically converted to embeddable
preview URLs; make the file accessible to **Anyone with the link**. For another
host, use a public PDF URL that permits embedding, or set
`siteConfig.resume.previewUrl` (also available as `NEXT_PUBLIC_RESUME_PREVIEW_URL`)
to a separate embeddable viewer URL. The download button always uses
`siteConfig.links.resume`. The configured preview origin is allowed by the site's
Content Security Policy; restart the dev server or rebuild after changing it.

The popup description and suggested download filename can be edited in
`siteConfig.resume` in the same file.
