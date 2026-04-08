# Xinbadts Portfolio

Personal portfolio built with Next.js 13, TypeScript, Tailwind CSS, and shadcn/ui.

## Local development

```bash
nvm use
npm install
npm run dev
```

Use Node `20.x` or `22.x`. The project does not support Node `25.x`.

## Required environment variables

Copy `.env.example` to `.env.local` and set:

- `EMAIL_SERVER_HOST`
- `EMAIL_SERVER_PORT`
- `EMAIL_SERVER_USER`
- `EMAIL_SERVER_PASS`
- `CONTACT_TO_EMAIL`

The contact form posts to `app/api/contact/route.ts` and sends email through your SMTP provider.

## Deploying to Vercel

1. Import the repository into Vercel.
2. Set the framework preset to `Next.js` if Vercel does not auto-detect it.
3. Set the project Node.js version to `20.x` or `22.x` if Vercel does not inherit it from `package.json`.
4. Add the environment variables from `.env.example`.
5. Deploy with:

```bash
vercel
```

Or let Vercel build automatically from your connected Git repository.
