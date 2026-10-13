# Garasi Prime

Frontend website for Garasi Prime, built with React and Vite.

## Run locally

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Open the local URL printed by Vite.

## Checks

- `npm run build` creates a production build in `dist/`.
- `npm run lint` checks the source files.

## Deploy to Cloudflare Pages

The `wrangler.jsonc` file configures this project as a Cloudflare Pages site.
In the Cloudflare dashboard, create a Pages project connected to this repository
and use these build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Deploy command: leave unset when using the Pages Git integration's automatic deployment.

Cloudflare Pages uses the configuration in `wrangler.jsonc` for the project name,
compatibility date, and build output directory.

If a deploy command is required by the dashboard, use
`npx wrangler pages deploy dist --project-name=garasi-prime`.
Do not use `npx wrangler deploy`; that command deploys a Worker, not a Pages site.
