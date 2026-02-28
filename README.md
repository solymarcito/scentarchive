# ScentArchive

An AI-powered identity-archive perfume brand website. Every person owns a unique scent identity file reflecting their memories, personality, and life narrative.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS variables
- **Animations**: Framer Motion
- **Fonts**: Cormorant Garamond, Jost, Courier Prime

## Getting Started

**Critical:** The dev server must run from the **scentarchive** folder, or the site will 404.

1. In your terminal, go to this project:
   ```bash
   cd /Users/solecito/IdeaProjects/scentarchive
   ```
2. Install and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open **only** the URL the terminal prints (e.g. `http://localhost:3000`). Use that exact port.

If your workspace is the parent folder (IdeaProjects), you can run `npm run dev` from there—it will start the app from scentarchive. Then open the URL that command prints.

## Pages

- `/` — Home (landing, brand concept, process, drop teaser)
- `/discover` — Identity discovery questionnaire
- `/collection` — The archive (product grid)
- `/atelier` — In-store experience & appointments
- `/story` — Brand story

## Design

The site follows the REPLICA aesthetic: warm neutrals, editorial minimalism, sparse typography, and memory-driven imagery. See the design system in `app/globals.css`.
