# Orin

Marketing website for **Orin** — a tech studio providing web-design and
programming solutions. Built with Next.js (App Router), TypeScript and
Tailwind CSS. Fully static, no backend.

Scroll-driven Three.js planets lead into an editorial studio site inspired by
the Karelia reference: midnight blue, atmospheric technology imagery, large typography,
and adjoining service panels. The hero uses real sphere geometry, local surface
maps, atmospheric shaders, and a travelling camera, with no video playback.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create an optimized production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Structure

- `src/app/page.tsx` — page composition (all sections)
- `src/app/layout.tsx` — Hanken Grotesk / Prata fonts and metadata
- `src/app/globals.css` — responsive midnight-blue editorial design
- `src/components/orin-header.tsx` — fixed navigation and mobile menu
- `src/components/space-hero.tsx` — scroll progress, planet navigation, motion control
- `src/components/planet-scene.ts` — lazy-loaded Three.js scene and GPU cleanup
- `src/components/studio-page.tsx` — studio, services, concept work, about,
  process accordion, contact form, and footer
- `public/textures/` — local Earth, Venus, and Mars maps
- `public/credits.txt` — image and texture attribution

The contact form opens the visitor's email app with a draft addressed to the
existing `hello@orin.dev` address. It does not send or store submissions. Confirm
that address before launch. Nexus and Flow are explicitly labeled design concepts;
replace them with real client work when available.

The scene respects reduced-motion preferences, has a pause control and a CSS
fallback when WebGL is unavailable, caps pixel density, and stops rendering when
offscreen or when the tab is hidden. Other older section components remain in
the repository but are not rendered by the current homepage.
