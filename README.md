# Kushal Agrawal — Personal Website

A minimal portfolio site built with Next.js. It covers education, work experience, featured projects, and a live Spotify “recently played” widget.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

## Features

- **Single-page portfolio** — About, education, experience, and projects on one scrollable page
- **Project modals** — Expandable cards with detailed descriptions and tech stacks
- **Spotify integration** — Recently played track via the Spotify Web API
- **Motion animations** — Page transitions and scroll effects with Motion
- **Light / dark theme** — System-aware theme switching

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | [Motion](https://motion.dev/) |
| UI | Radix UI, Lucide icons |
| Analytics | Vercel Analytics |
| Package manager | pnpm |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/)

### Install and run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
pnpm build    # Production build
pnpm start    # Run production server
pnpm lint     # Run ESLint
```

## Environment Variables

Spotify recently played is optional. Without credentials, the site falls back to static placeholder data.

Create a `.env.local` file in the project root:

```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

## Project Structure

```
app/
├── page.tsx              # Main portfolio page
├── data.ts               # Projects, experience, and site content
├── header.tsx / footer.tsx
├── api/spotify/          # Spotify recently-played endpoint
components/
├── spotify-recently-played.tsx
└── ui/                   # Reusable UI primitives
public/
└── images/               # Logos, profile photo, resume
```

## Content

Site content lives in `app/data.ts`. Update projects, work experience, about text, and social links there.

## License

Private — all rights reserved.
