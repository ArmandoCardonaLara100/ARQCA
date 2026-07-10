# ARQCA — Architecture Portfolio

Premium portfolio website for **Reynaldo Cardona Guerrero (ARQCA)**.

Built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide icons**. Fully static, Vercel-ready.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Customizing

### 1. Contact details, links & hours

Everything lives in [`src/lib/site-config.ts`](src/lib/site-config.ts) —
phone, WhatsApp, Instagram, email, address, Google Maps embed URL and
business hours. Edit that single file and the header, contact section and
footer update automatically.

### 2. Content

[`src/lib/data.ts`](src/lib/data.ts) contains the navigation, services,
projects, gallery slides, statistics and testimonial placeholders.

### 3. Replacing image placeholders

Every reserved image area renders the `ImagePlaceholder` component. To use a
real photo, drop it in `public/images/` and swap the placeholder for
`next/image`:

```tsx
// before
<ImagePlaceholder label="Hero Image" … />

// after
<Image src="/images/hero.jpg" alt="…" fill className="object-cover" />
```

Placeholder locations:

| Image                | File                                   |
| -------------------- | -------------------------------------- |
| Hero photograph      | `src/components/sections/Hero.tsx`     |
| Architect portrait   | `src/components/sections/About.tsx`    |
| Project photos (4)   | `src/components/sections/Projects.tsx` |
| Gallery photos (8)   | `src/components/sections/Gallery.tsx`  |
| Google Maps          | paste embed URL in `site-config.ts`    |

### 4. Colors & fonts

The palette and font tokens are defined in
[`src/app/globals.css`](src/app/globals.css) (`--color-ink`,
`--color-graphite`, `--color-paper`, `--color-accent`). Fonts (Manrope +
Space Grotesk) are loaded in [`src/app/layout.tsx`](src/app/layout.tsx).

## Deploying to Vercel

Push the repo to GitHub and import it at [vercel.com/new](https://vercel.com/new) —
no configuration needed. Remember to set your real domain in
`site-config.ts` (`SITE.url`) for correct SEO/Open Graph metadata.
