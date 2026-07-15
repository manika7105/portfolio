# Manika Goel — Portfolio

A premium, animated personal portfolio built with Next.js 15 (App Router),
TypeScript, Tailwind CSS v4, and Framer Motion. Dark/light mode, a canvas
constellation hero, scroll-triggered reveals, and a working contact form
powered by [Resend](https://resend.com).

## Tech stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion + a hand-rolled canvas particle field
- **Forms:** react-hook-form + zod validation
- **Email:** Resend (contact form → your inbox)
- **Icons:** lucide-react, plus two custom inline SVGs for GitHub/LinkedIn

## Design system

- **Palette:** emerald → cyan gradient accent, near-black dark theme /
  soft off-white light theme (see CSS variables in `src/app/globals.css`)
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels,
  tags, and data)
- **Signature motif:** the "belt stripe" — a two-tone gradient bar that
  nods to Manika's black-belt karate background, used as the hero
  underline and as the base of every skill-proficiency meter

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Setting up the contact form (Resend)

The contact form at the bottom of the page posts to `src/app/api/contact/route.ts`,
which sends a real email using Resend.

1. Create a free account at [resend.com](https://resend.com).
2. Grab an API key from the dashboard and put it in `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
3. By default, emails send from Resend's shared `onboarding@resend.dev`
   address — this works immediately with **no domain setup**, and lands
   in the `CONTACT_TO_EMAIL` inbox (defaults to Manika's email).
4. Once you verify your own domain on Resend, update `CONTACT_FROM_EMAIL`
   in `.env.local` to an address on that domain for better deliverability.

Without `RESEND_API_KEY` set, the form will show a friendly error asking
the visitor to email you directly instead — the rest of the site still
works fine.

## Project structure

```
src/
  app/
    layout.tsx          # fonts, metadata, theme provider
    page.tsx             # assembles all sections
    globals.css          # design tokens, dark mode variant, signature motif CSS
    api/contact/route.ts # Resend email endpoint
    sitemap.ts, robots.ts, manifest.ts
  components/
    layout/               # Navbar, Footer, ThemeToggle, ThemeProvider
    sections/             # Hero, About, Skills, Projects, Experience,
                           # Education, Certifications, Achievements, Contact
    effects/              # ParticleField (canvas), Reveal (scroll animation),
                           # Magnetic (hover effect)
    ui/                   # Button, Card, Badge, Input, Textarea, Label
    icons/                # brand-icons.tsx (GitHub/LinkedIn SVGs)
  lib/
    data.ts               # ALL editable content lives here
    validation.ts         # zod schema for the contact form
    utils.ts              # `cn` class-merging helper
  types/index.ts          # shared TypeScript interfaces
public/
  images/                 # profile photo + project screenshots
  resume/                 # downloadable resume PDF
```

## Editing content

Everything text-based — bio, skills, projects, experience, education,
certifications, the achievement, and social links — lives in a single file:
**`src/lib/data.ts`**. Update it and the whole site updates; no need to
touch components.

To swap the profile photo or a project screenshot, replace the matching
file in `public/images/` (keep the same filename, or update the path in
`data.ts`). The resume PDF lives at `public/resume/manika-goel-resume.pdf`.

## Building for production

```bash
npm run build
npm start
```

## Deploying

The fastest path is [Vercel](https://vercel.com), made by the Next.js team:

1. Push this project to a GitHub repository.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL` /
   `CONTACT_FROM_EMAIL`) environment variables in the Vercel project settings.
4. Deploy. Update the `SITE_URL` constant in `src/app/layout.tsx`,
   `sitemap.ts`, and `robots.ts` to your real domain once you have one.

Any other Node-compatible host (Netlify, Render, a VPS with `npm start`)
works too, as long as the same environment variables are set.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations are disabled/shortened)
- Visible keyboard focus states throughout
- Responsive from small mobile screens up through wide desktops
- Images use `next/image` for automatic optimization
- Fonts are self-hosted via `next/font/google` (no layout shift, no
  runtime request to Google Fonts)
