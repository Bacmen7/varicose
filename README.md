# Vericose (Sira Vascular)

React + Vite + TypeScript + Tailwind CSS v4 single-page app (migrated from Next.js).

## Getting Started

```bash
npm install
npm run dev       # dev server (default http://localhost:5173)
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

## Structure

- `src/main.tsx` — entry point (BrowserRouter + global CSS)
- `src/App.tsx` — layout (Navbar) + all routes (lazy-loaded pages)
- `src/pages/` — one component per route
- `src/components/` — shared sections/UI
- `src/compat/` — small drop-in shims for the old Next.js APIs (`Image`, `Link`, `usePathname`, `usePageMeta`)
- `public/` — static assets (served from `/`)

## Deploying

This is an SPA — configure your static host to rewrite all paths to `index.html`
(e.g. Netlify `/* /index.html 200`, or Vercel rewrites) so deep links like
`/treatments/evlt` work on refresh.
