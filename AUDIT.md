# ScentArchive — Codebase Audit

Detailed breakdown of what was implemented, file ownership, design decisions, and deviations from the original spec.

---

## 1. Navigation

**What was built**
- Fixed top nav with brand label (left), text links (right), and mobile hamburger that opens a full-screen overlay.

**Files**
- `components/ui/Nav.tsx` — main nav component (client component with `useState` for mobile menu).
- `app/layout.tsx` — mounts `Nav` above `<main>{children}</main>`.

**Design decisions**
- **Background:** `bg-cream/80` + `backdrop-blur-sm` (spec: cream with backdrop blur).
- **Border:** `border-b border-dust/40` (spec: very subtle border).
- **Brand:** Courier Prime, `text-xs`, `uppercase`, `tracking-nav` (0.25em), `text-ink`.
- **Links:** Jost 300, `text-sm`, `text-ink`, `hover:text-ash`, `transition-all duration-500`.
- **Mobile:** Three 20px-wide `bg-ink` lines; overlay uses Cormorant 3xl light italic for links and “close” in Courier ash; `AnimatePresence` for enter/exit.
- **Max width:** `max-w-5xl` centered, `px-6 py-5`.

**Deviations / notes**
- No explicit `letter-spacing: 0.25em` in Tailwind for nav; `tracking-nav` is used and maps to 0.25em in `tailwind.config.ts`.
- Spec asked for “no nav border” with “very subtle border-b border-dust/40” — implemented as such.

---

## 2. Pages

### 2.1 Home (`/`)

**What was built**
- Single landing page composed of: Hero, Brand Concept, Process, Celebrity Drop Teaser, Identity Story, CTA. Root URL `/` is served via middleware rewrite to `/home` so the homepage always loads.

**Files**
- `app/page.tsx` — re-exports/home content (used when route resolves; may not be hit due to rewrite).
- `app/home/page.tsx` — actual home content (Hero + ConceptSection + ProcessSection + DropTeaser + IdentityStory + CTASection). This is what `/` rewrites to.
- Home sections live in `components/home/*.tsx` (see Components).

**Design decisions**
- **Hero:** Full viewport height, `bg-cream`, centered content; label “IDENTITY ARCHIVE · EST. 2025”; headline “your scent has always existed.” (Cormorant 300 italic, 5xl → 7xl → 8xl); subtext “it was simply waiting to be named.” (Jost 300, ash); single CTA “discover your archive →” via `AnimatedLink`; thin rule at bottom.
- **Concept:** Two columns (image left, text right); image `aspect-[3/4]`, `archive-image`; right: “THE ARCHIVE”, headline, body, blockquote with `border-l-2 border-gold-thread pl-6`.
- **Process:** Centered Cormorant italic title; three steps with Courier step numbers (01, 02, 03), one-word Cormorant titles, Jost body; “——” separators on desktop only.
- **Drop teaser:** Dark section `bg-ink`, gold-thread label, warm-white headline/body, `CountdownTimer`, email input + “→” submit (placeholder handler).
- **Identity story:** Centered `max-w-xl`, “ARCHIVE FILE · SA-000001”, Cormorant italic headline, Jost body, Courier footer.
- **CTA:** Two columns: “ready to be archived?” and two `AnimatedLink`s (discover, atelier).

**Deviations**
- **Routing:** Spec assumed a single root `app/page.tsx`. Implemented uses `middleware.ts` to rewrite `/` → `/home` and a `config.matcher` so only `/`, `/scentarchive`, `/scentarchive/`, `/index.html`, `/home` run middleware. This was added to work around persistent 404s when serving from different roots.
- **next.config.js** also has redirects: `/scentarchive`, `/scentarchive/`, `/index.html`, `/home` → `/` (so `/home` redirects to `/` for users, while internally `/` is rewritten to `/home`).

---

### 2.2 Discover (`/discover`)

**What was built**
- Multi-step identity questionnaire (one question per view), then loading screen, then results with archive ID, notes, statement, narrative, “order your bottle”, “save your identity file”, and share.

**Files**
- `app/discover/page.tsx` — state machine (`useReducer`: `currentStep`, `answers`, `direction`, `phase`), question step, loading, results; nav with “←” / “→”.
- `lib/questions.ts` — question data (6 questions: memory, time, landscape, remembered, words, carry).
- `components/discover/QuestionStep.tsx`, `OptionSelect.tsx`, `TagSelect.tsx`, `LoadingScreen.tsx`, `ResultsScreen.tsx`.

**Design decisions**
- **Flow:** No visible progress bar (per spec). Steps: text → options → options → text → tags → text.
- **Transitions:** `AnimatePresence mode="wait"`; exit `opacity: 0, y: -10`; enter `opacity: 0, y: 20` (or reversed by direction); `duration: 0.4`, ease `[0.25, 0.1, 0.25, 1]`.
- **Loading:** Phrases cycle every 750ms (“reading your memory…”, “mapping your identity…”, etc.); total loading 3s then to results.
- **Results:** Archive ID `SA-` + 6 random digits; notes from `generateNotes(answers)` (landscape + time maps); fixed identity statement and narrative (not personalized from answers beyond notes).
- **Save:** Downloads a `.txt` file with archive ID, notes, statement, narrative.
- **Share:** Single “share” link to Twitter intent.

**Deviations**
- **Identity statement/narrative:** Spec suggested a “generated” one-liner and 2-sentence narrative. Implemented uses one fixed statement and one fixed narrative; only the notes are derived from answers (landscape + time). No AI or dynamic copy.
- **Spec:** “Share prompt: your identity. share it. with minimal icon links” — only one text “share” link (Twitter), no other social icons.
- **Placeholder:** “begin here…” used for text inputs.

---

### 2.3 Collection (`/collection`)

**What was built**
- “the archive” + “CURATED IDENTITY EDITIONS” header, horizontal filter bar (ALL · MEMORY · NATURE · URBAN · INTIMATE), product grid (3 cols desktop, 1 mobile). Product detail at `/collection/[id]`.

**Files**
- `app/collection/page.tsx` — filter state, `FilterBar`, grid of `ProductCard`.
- `app/collection/[id]/page.tsx` — single product: image, edition, name, description, price, “add to archive” (no-op), back link.
- `components/collection/ProductCard.tsx`, `FilterBar.tsx`.
- `lib/products.ts` — 6 products with id, edition, name, price, category, image URL.

**Design decisions**
- **Cards:** No shadow, no border-radius (flat); image `aspect-[3/4]`, `archive-image`; hover scale `1.02` over 0.6s; below: Courier “EDITION 0XX”, Cormorant italic name, Jost price in ash; hover on name: thin gold-thread line (via `group-hover:border-b group-hover:border-gold-thread` — line under text).
- **Filter:** Horizontal Courier labels; click updates filter with fade (grid uses `motion.div layout` and staggered item animation).
- **Detail page:** Two columns (image + copy), same typography and “add to archive” button (no checkout).

**Deviations**
- Spec: “thin gold-thread line animates in under the product name” — implemented as a hover border, not a separate animated line.
- Product links go to `/collection/[id]`; “add to archive” and checkout not implemented.
- Filter transition is grid re-render with stagger, not a dedicated fade on filter change.

---

### 2.4 Atelier (`/atelier`)

**What was built**
- Hero image (60vh) with overlay text “the atelier” + short body; “request an appointment” form: name, email, city (dropdown: new york, los angeles, chicago, miami), preferred date (native date input), message.

**Files**
- `app/atelier/page.tsx` — hero section and form (client component with local state).

**Design decisions**
- **Hero:** Image with `archive-image`, gradient `from-cream/90` at bottom; Cormorant headline, Jost body.
- **Form:** Labels Courier 10px uppercase tracking-label ash; inputs borderless with `border-b border-dust`, focus `border-gold-thread`; submit “submit request →”. No box around fields (per spec).
- **Date input:** Styled with `[color-scheme:light]` to keep light theme.

**Deviations**
- Form submit is a placeholder (no backend or booking).
- Spec mentioned “style the native date input with CSS” — minimal styling; native control preserved.

---

### 2.5 Story (`/story`)

**What was built**
- Long-form editorial: intro, full-width image, body, pull quote (gold-thread left border), more body, timeline (vertical line + dots + Courier years + Jost text).

**Files**
- `app/story/page.tsx` — all sections in one client component.

**Design decisions**
- **Sections:** `border-b border-dust` between blocks; `max-w-3xl` or `max-w-2xl` for text; images full width with aspect ratio.
- **Pull quote:** `border-l-2 border-gold-thread pl-8`, Cormorant 2xl–3xl italic.
- **Timeline:** Vertical line `bg-dust`, dots `bg-gold-thread`, Courier year, Jost copy; scroll-triggered motion (opacity + x).

**Deviations**
- Spec: “Alternating sections of full-width text and images” — structure is present but not strictly alternating; image block then text then quote then text then timeline.
- Timeline is static data (2023, 2024, 2025) in component, not from CMS.

---

### 2.6 Not found

**Files**
- `app/not-found.tsx` — custom 404: “404 · identity not found”, “this page has not been archived.”, short hint about running dev from `scentarchive`, “go to homepage →” button.

**Design**
- Centered, cream background, Courier label, Cormorant italic headline, Jost body, bordered link. Matches spec tone.

---

## 3. Components

### 3.1 UI (shared)

| Component         | File                        | Purpose |
|------------------|-----------------------------|---------|
| **Nav**          | `components/ui/Nav.tsx`     | Top nav + mobile overlay. |
| **Footer**       | `components/ui/Footer.tsx`  | Four columns: brand + manifesto, explore, support, legal; bottom strip “© SCENTARCHIVE · ALL IDENTITIES ARCHIVED”. |
| **AnimatedLink** | `components/ui/AnimatedLink.tsx` | Next `Link` + span that grows from 0 to full width on hover (`transition-[width] duration-500`, ease `[0.25,0.1,0.25,1]`). Spec: “underline animates in from left” — implemented with width, not pseudo. |
| **CountdownTimer** | `components/ui/CountdownTimer.tsx` | Target `2025-03-30`; updates every 1s; Courier numerals + labels (DAYS, HOURS, MINUTES, SECONDS); units separated by vertical rules. |
| **CustomCursor** | `components/ui/CustomCursor.tsx` | Crosshair “+” in Courier, `var(--ash)`, 12px; follows mouse with lerp 0.15 in `requestAnimationFrame`; `hidden md:block`, `pointer-events-none`; `cursor: none` in globals. |

**Footer:** Spec said “two columns: left brand + manifesto, right three columns of links”. Implemented is a 4-column grid (brand, explore, support, legal). Bottom strip and border match.

### 3.2 Home

| Component          | File                              | Purpose |
|--------------------|-----------------------------------|---------|
| **Hero**           | `components/home/Hero.tsx`        | Hero block; uses `useReducedMotion` for initial animations. |
| **ConceptSection** | `components/home/ConceptSection.tsx` | Two-column concept + blockquote. |
| **ProcessSection** | `components/home/ProcessSection.tsx`  | Three steps (data in component). |
| **DropTeaser**     | `components/home/DropTeaser.tsx`  | Dark block + countdown + email form. |
| **IdentityStory**  | `components/home/IdentityStory.tsx` | Single identity story block. |
| **CTASection**     | `components/home/CTASection.tsx`  | “ready to be archived?” + two links. |

### 3.3 Discover

| Component        | File                                  | Purpose |
|------------------|----------------------------------------|---------|
| **QuestionStep** | `components/discover/QuestionStep.tsx` | Renders one question; textarea, OptionSelect, or TagSelect by type. |
| **OptionSelect** | `components/discover/OptionSelect.tsx` | Buttons per option; selected: `border-b-2 border-gold-thread`. |
| **TagSelect**    | `components/discover/TagSelect.tsx`   | Tag buttons; max selection enforced; selected: `border-gold-thread`. |
| **LoadingScreen** | `components/discover/LoadingScreen.tsx` | Cycling Cormorant italic phrases. |
| **ResultsScreen** | `components/discover/ResultsScreen.tsx` | Archive ID, notes, statement, narrative, order + save + share. |

### 3.4 Collection

| Component     | File                                  | Purpose |
|---------------|----------------------------------------|---------|
| **ProductCard** | `components/collection/ProductCard.tsx` | Image + edition + name + price; hover scale + name underline. |
| **FilterBar** | `components/collection/FilterBar.tsx`  | ALL · MEMORY · NATURE · URBAN · INTIMATE. |

**Skipped / simplified**
- **GrainOverlay:** Spec had `GrainOverlay.tsx`; grain is implemented in `globals.css` with `body::before`, so a separate component was not added (or was removed). No standalone `GrainOverlay.tsx` in the tree.

---

## 4. Design System

### 4.1 Colors (CSS variables)

**File:** `app/globals.css` (`:root`)

| Variable       | Value     | Usage (spec / implementation) |
|----------------|-----------|--------------------------------|
| `--cream`      | `#f5f0e8` | Page background. |
| `--warm-white` | `#faf8f4` | Card/section backgrounds, dark-section text, countdown numerals. |
| `--ink`        | `#1c1a17` | Primary text. |
| `--ash`        | `#7a7570` | Secondary text, labels. |
| `--dust`       | `#c8c0b4` | Borders, dividers. |
| `--gold-thread`| `#b89a6a` | Accent (underlines, blockquotes, selected states, focus). |
| `--archive-red`| `#8b2020` | Defined but **not used** in the codebase (spec: “ultra-rare — archive labels or limited edition”). |

Tailwind: `tailwind.config.ts` maps `cream`, `warm-white`, `ink`, `ash`, `dust`, `gold-thread`, `archive-red` to these variables.

### 4.2 Typography

**File:** `app/layout.tsx` (fonts), `tailwind.config.ts` (families), usage across components.

- **Display/headline:** Cormorant Garamond — `font-cormorant`, weights 300 and 400, normal + italic. Letter-spacing `tracking-display` = `0.08em`. Used for hero, section titles, pull quotes.
- **Body:** Jost — `font-jost`, 300 and 400. Line height ~1.8 where needed (`leading-[1.8]`). Default body in layout: `font-jost antialiased`.
- **Labels/metadata:** Courier Prime — `font-courier`, 400. Uppercase, small (e.g. `text-[10px]`), `tracking-label` (0.2em), ash. Used for “ARCHIVE ID”, “EDITION”, “IDENTITY ARCHIVE · EST. 2025”, footer labels, etc.

**Decisions**
- No bold except where a single word is emphasized (spec); implementation avoids bold.
- Body copy is lowercase/sentence case; labels are uppercase in Courier only.
- Libre Baskerville was in spec as body option; **Jost** was chosen instead.

### 4.3 Spacing & layout

- **Base unit:** 8px (Tailwind default).
- **Sections:** `py-32 md:py-48` (spec: “minimum py-32, often py-48”).
- **Content width:** `max-w-5xl` for most pages; text often further constrained to `max-w-2xl` or `max-w-xl`.
- **Asymmetry:** Concept section is two-column (image left, text right); CTA is two-column; Process is three columns on desktop.
- **Dividers:** `border-t border-dust` or `border-b border-dust` between sections (no heavy visual breaks).

---

## 5. Animations

**Library:** Framer Motion.

**Easing:** `ease: [0.25, 0.1, 0.25, 1]` (cubic-bezier) used consistently. In Tailwind: `exhale`. No bouncy springs.

**Patterns:**

1. **Hero (Hero.tsx):** Staggered fade-up: label, headline, subtext, CTA with delays 0, 0.3, 0.6, 0.9s; `opacity: 0, y: 20` → `opacity: 1, y: 0`; duration 0.7s. Disabled when `useReducedMotion()` is true.
2. **Scroll reveal:** `whileInView` with `viewport={{ once: true, amount: 0.2 }}`; `opacity: 0, y: 24` → `opacity: 1, y: 0`; duration 0.7s. Used in ConceptSection, ProcessSection, DropTeaser, IdentityStory, CTASection, collection grid, story, atelier.
3. **Discover steps:** `AnimatePresence mode="wait"`; enter/exit with `y: 20` / `y: -10` and opacity; duration 0.4s; direction-aware.
4. **Loading screen:** Phrases cycle; each phrase fades in/out (duration 0.4s).
5. **Hover:** `transition-all duration-500` or `duration-500` on links/buttons; ProductCard image scale 1.02 over 0.6s.
6. **Reduced motion:** `globals.css` has `@media (prefers-reduced-motion: reduce)` forcing very short duration and one iteration; Hero also checks `useReducedMotion()` and skips motion variants.

**Deviations**
- Spec: “Page transitions: AnimatePresence with opacity fade (0.4s)” — there is no app-level page transition wrapper; only discover step transitions and mobile nav use AnimatePresence.
- Stagger: Process steps and some grids use `delay: 0.1 * i`; no parent `staggerChildren` variant.

---

## 6. Special Effects

### 6.1 Grain overlay

**File:** `app/globals.css` — `body::before`

- `position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: 0.035`.
- `background-image: url("data:image/svg+xml,...")` with SVG using `feTurbulence` (fractalNoise, baseFrequency 0.9, numOctaves 4).
- Spec mentioned ~3% opacity; implemented 0.035.

### 6.2 Custom cursor

**Files:** `app/globals.css` (cursor: none), `components/ui/CustomCursor.tsx`

- `* { cursor: none }`; `@media (pointer: coarse)` restores `cursor: auto`.
- CustomCursor: “+” in Courier, color `var(--ash)`, 12px; positioned with `left`/`top`; lerp factor 0.15; hidden on small screens (`hidden md:block`).

### 6.3 Image filters

**File:** `app/globals.css` — `.archive-image`

- Default: `filter: grayscale(30%) sepia(25%) contrast(95%); transition: filter 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)`.
- Hover: `grayscale(10%) sepia(15%) contrast(100%)`.
- Spec: “grayscale by default, warm sepia; on hover soft fade to slightly more saturation” — implemented as above.

### 6.4 Scrollbar

**File:** `app/globals.css`

- `scrollbar-width: none`; `-ms-overflow-style: none`; `body::-webkit-scrollbar { display: none }`. Matches “scrollbar: hidden”.

---

## 7. Mobile Responsiveness

**Approach:** Tailwind breakpoints; mobile-first where evident.

- **Nav:** Links hidden below `md`, hamburger shown; overlay full-screen, stacked Cormorant links.
- **Layouts:** Grids and flex often `flex-col` or `grid-cols-1` by default, then `md:grid-cols-2`, `lg:grid-cols-3` (e.g. collection, footer).
- **Typography:** Hero headline `text-5xl md:text-7xl lg:text-8xl`; other titles use `md:text-*` for larger sizes.
- **Spacing:** `py-32 md:py-48`, `px-6`, `gap-16 md:gap-24` etc.
- **Process:** Steps stack vertically on small screens; “——” separator `hidden md:block`.
- **Custom cursor:** Disabled on small screens (`hidden md:block`) so touch devices keep default cursor.
- **Discover:** Single column; nav arrows fixed at bottom; form and options wrap.
- **Countdown:** `text-2xl md:text-3xl`; units can wrap with `flex-wrap`.
- **Atelier hero:** `h-[60vh] min-h-[400px]`; form single column.

**Deviations**
- No dedicated mobile breakpoint constant; relies on Tailwind’s `md`/`lg`.
- Spec “mobile-first” is followed in spirit; no explicit `max-width` media for very small devices beyond Tailwind.

---

## 8. Summary of Gaps / Simplifications

| Item | Spec | Status |
|------|------|--------|
| Root route | Single `app/page.tsx` for `/` | Middleware rewrites `/` → `/home`; `app/page.tsx` and `app/home/page.tsx` both exist; redirects in next.config for `/home` etc. |
| GrainOverlay component | `GrainOverlay.tsx` | Grain in `body::before` in CSS only; no component file. |
| AnimatedLink underline | “::after pseudo-element” | Implemented with a `<span>` and width transition. |
| Discover identity statement/narrative | Generated from answers | Fixed copy; only scent notes derived from answers. |
| Share | “minimal icon links” | One Twitter text link only. |
| ProductCard hover line | “thin gold-thread line animates in” | CSS border on name hover, not separate animated line. |
| Collection filter | “fade transition” on filter | Grid re-renders with staggered item animation; no explicit filter transition. |
| archive-red | “ultra-rare” accent | Variable defined, never used. |
| Body font | Jost or Libre Baskerville | Jost only. |
| Page transitions | App-level AnimatePresence 0.4s | Not implemented; only in-discover and mobile nav. |
| Atelier / Discover forms | Backend integration | Placeholder handlers only. |
| “Add to archive” / checkout | Collection detail | Button present, no action. |
| Space Mono | Optional accent/label font | Courier Prime only for monospace. |

---

## 9. File Map (Quick Reference)

```
app/
  layout.tsx          — Root layout, fonts, Nav, Footer, CustomCursor
  globals.css         — Variables, grain, scrollbar, cursor none, .archive-image, reduced-motion
  page.tsx            — Home (may be unused if rewrite wins)
  home/page.tsx       — Home content (target of / rewrite)
  not-found.tsx       — Custom 404
  discover/page.tsx    — Questionnaire state machine + steps + loading + results
  collection/page.tsx  — Filter + product grid
  collection/[id]/page.tsx — Product detail
  atelier/page.tsx    — Hero + booking form
  story/page.tsx      — Editorial + timeline

components/
  ui/ Nav, Footer, AnimatedLink, CountdownTimer, CustomCursor
  home/ Hero, ConceptSection, ProcessSection, DropTeaser, IdentityStory, CTASection
  discover/ QuestionStep, OptionSelect, TagSelect, LoadingScreen, ResultsScreen
  collection/ ProductCard, FilterBar

lib/
  questions.ts        — 6 questions (text, options, tags)
  products.ts         — 6 products

middleware.ts         — Rewrite / → /home; redirect /scentarchive, /index.html
next.config.js        — images (domains + remotePatterns), redirects
tailwind.config.ts    — colors, fontFamily, letterSpacing, transition
```
