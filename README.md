# Garasi Prime

Frontend website for Garasi Prime, built with React and Vite.

## Run locally

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Open the local URL printed by Vite.

## Checks

- `npm run build` creates a production build in `dist/`.
- `npm run lint` checks the source files.

## Deploy to Cloudflare Workers

The `wrangler.jsonc` file configures the Vite build as a Cloudflare Worker with
static assets. In the Cloudflare dashboard, connect this repository to a Workers
Build and use these settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Wrangler reads the asset directory (`dist`) from `wrangler.jsonc`. The
single-page-application setting serves `index.html` for unmatched routes, which
supports client-side routing.
