# Samuel Sean

A modern personal portfolio built with Next.js 13, TypeScript, Tailwind CSS, and shadcn/ui.

## Overview

This app showcases Samuel Sean's profile, experience, tech stack, and selected projects in a one-page layout with smooth section navigation and a working contact form.

Sections rendered on the home page:

- `Hero`
- `About`
- `Skills`
- `Projects`
- `Contact`

Main app entry points:

- `app/layout.tsx` - global shell (navbar, theme provider, footer, toasts)
- `app/page.tsx` - homepage section composition
- `app/api/contact/route.ts` - email delivery endpoint for contact form submissions

## Design System

The interface follows a clean, warm, professional style with:

- **Primary palette:** amber (`--primary`)
- **Secondary palette:** green (`--secondary`)
- **Accent palette:** yellow (`--accent`)
- **Mode support:** light + dark themes (system-aware)
- **Visual language:** gradient headings, rounded cards, subtle shadows, smooth motion, section-based scrolling

Theme tokens and shared styles are defined in `app/globals.css`.

## Tech Stack

- Next.js 13 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui + Radix UI primitives
- React Hook Form + Zod
- Sonner (toast notifications)
- Nodemailer (SMTP contact form backend)

## Local Development

### Prerequisites

- Node.js `20.x` or `22.x` (required)
- npm

Do not use Node `25.x` with this project.

### Start the app

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Quality checks

```bash
npm run typecheck
npx eslint . --ext .js,.jsx,.ts,.tsx
npm run build
```

## Environment Variables

Create `.env.local` from `.env.example` and provide:

- `EMAIL_SERVER_HOST`
- `EMAIL_SERVER_PORT`
- `EMAIL_SERVER_USER`
- `EMAIL_SERVER_PASS`
- `CONTACT_TO_EMAIL`

These are used by `app/api/contact/route.ts` to send form submissions through your SMTP provider.

## Deployment (Vercel)

1. Import this repository into Vercel.
2. Keep the framework preset as `Next.js`.
3. Ensure Node.js runtime is `20.x` or `22.x`.
4. Add all environment variables listed above.
5. Deploy from dashboard or CLI:

```bash
vercel
```

## Build Notes

- `next.config.js` includes `swcMinify: false` for build stability.
- `next.config.js` also allows external images from `images.pexels.com`.

## Project Structure

```text
app/
  api/contact/route.ts
  layout.tsx
  page.tsx
  success/page.tsx
components/
  hero.tsx
  about.tsx
  skills.tsx
  projects.tsx
  contact.tsx
  navbar.tsx
  footer.tsx
lib/
  projects-data.ts
```
