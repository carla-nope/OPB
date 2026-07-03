# Operation Plant Based

A Vite + React digital asset site for Operation Plant Based: family-friendly plant-based meal planning, lead capture, product landing pages, and SEO-ready blog content.

## Current site structure

- Home page
- Free Mission Planner quiz
- Free 5-Day Starter Kit landing page
- Meal Prep Playbook sales page
- 10-Week Course / beta waitlist page
- Community page
- Newsletter page
- About page
- Blog index and blog post pages
- Legal pages: Privacy, Terms, Disclaimer, Affiliate Disclosure

## Tech stack

- Vite
- React 19
- TypeScript
- Wouter routing
- Tailwind CSS v4
- Sonner toast notifications
- Vercel static deployment

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Vercel is configured through `vercel.json`:

```json
{
  "framework": "vite",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public"
}
```

## Business configuration

Edit `client/src/lib/config.ts` to update:

- brand name and tagline
- contact email
- lead capture email or Kit/ConvertKit form endpoint
- product checkout links
- social links
- price points

The site currently uses FormSubmit as a simple fallback lead capture path when no Kit form endpoint is configured.

## Asset notes

This repository is intentionally static-first. There is no required server, database, or API layer for the public website. Product delivery, email automation, and checkout links can be connected later through Kit, Gumroad, Lemon Squeezy, Stripe, Systeme.io, or another platform.

## Pre-launch checklist

- Replace or confirm all product checkout URLs in `client/src/lib/config.ts`.
- Confirm the email capture endpoint.
- Add a final `og-image.png` to `client/public/`.
- Review legal pages before accepting payments.
- Connect the production domain in Vercel.
