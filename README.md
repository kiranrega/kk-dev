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
