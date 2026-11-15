# Մհեր & Անի — Wedding Invitation

Mobile-first wedding invitation built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.
Ivory & gold design: the guest taps an envelope to open it, then scrolls through a watercolor name card, the day's schedule with venue photos and map links, a photo gallery, a live countdown and a closing quote.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (the page is fully static)
npm run start
npm run lint
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the deployed URL so link previews (Open Graph) resolve to absolute image URLs.

## Project structure

```
src/
  app/
    layout.tsx            # fonts, metadata, viewport
    page.tsx              # composes the invitation
    globals.css           # design tokens (@theme), page background, reveal animation
    icon.svg              # favicon (gold heart)
    opengraph-image.jpg   # link-preview image
  assets/images/mher-ani/ # photos: couple, venues, watercolor illustration
  components/envelope/
    envelope-gate.tsx     # client: envelope intro, scroll lock, music, scroll reveals
    countdown.tsx         # client: live countdown
    icons.tsx primitives.tsx
    sections/             # hero, schedule, gallery, countdown, finale
  content/
    invitation.ts         # ALL names, date, schedule, photos and copy
    types.ts              # content types
  lib/                    # fonts, maps link helper, helpers
```

## Editing the invitation

- Everything shown on the page is in [`src/content/invitation.ts`](src/content/invitation.ts): names, date, schedule, venues/map queries, which photo goes where, and all text.
- The link-preview image is a static file: `src/app/opengraph-image.jpg` (regenerate it if names or date change).
- **Background music:** add an mp3 under `public/` (e.g. `public/audio/wedding-song.mp3`) and set `music.src` to `"/audio/wedding-song.mp3"` in `invitation.ts`. It starts softly when the envelope is opened and a play/pause button appears; with `src: null` the button is hidden.
- The old `/new` URL redirects to `/`.

## Notes

- **Rendering:** only two small client components — `EnvelopeGate` (open animation, scroll lock, music, one shared `IntersectionObserver` for reveals) and `Countdown` (ticks every second, rendered on the client only to avoid hydration mismatches). Everything else is server-rendered and the page is prerendered as static HTML. Without JavaScript the envelope is skipped and all content is shown.
- **Accessibility:** motion respects `prefers-reduced-motion`; the page behind the envelope is `inert` until it is opened.
- **Fonts:** `next/font` self-hosts Cormorant Garamond + Noto Serif Armenian (headings) and Inter + Noto Sans Armenian (body).
- **Privacy:** the page sets `robots: noindex, nofollow` — shareable by link but kept out of search engines.
