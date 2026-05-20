# Kiran Kumar Rega Portfolio

Portfolio rebuilt around the compact profile-document style of `chanhdai.com`, using Kiran Kumar Rega's resume data.

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

## Data Source

Content was extracted from:

`C:\Users\kiran\Downloads\Kiran_Kumar_Rega.pdf`

Included resume details:

- Kiran Kumar Rega
- Full-Stack Software Engineer
- React, Next.js, TypeScript, Redux, Node.js, Express, REST APIs, MongoDB, MySQL
- IntouchCX experience
- Extended Web AppTech experience
- Lancerscape, Catapult, and Extended Asset Management System projects
- Top Performer - Q3 2024 recognition
- NxtWave and M.Tech education
- phone, email, GitHub, LinkedIn, and portfolio website

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
