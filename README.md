# Deployment Guide

This repository currently contains an Express backend (`index.js`) and is configured as a Node app in `package.json`.

## Important
GitHub Pages hosts static websites (HTML/CSS/JS). It cannot run server-side Node/Express apps. Therefore you cannot deploy this repository's Express server directly to GitHub Pages.

## Options

1) Convert to a static frontend and deploy to GitHub Pages
- Create a static `index.html` (and other assets) and place them in a `docs/` folder or build them into `gh-pages` branch.
- Add `homepage` to `package.json` and use a deploy script (for React apps or static build tools).

2) Deploy the existing Express app to a Node-friendly host (recommended)
- Vercel (serverless functions) — free tier available. Easy GitHub integration.
- Render — supports Node services, auto-deploys from GitHub, free instances.
- Railway — simple node deployments with free credits.
- Heroku (if still preferred) — may require setting up `Procfile`.

### Quick steps for Render (example)
1. Push this repo to GitHub.
2. Go to https://render.com and sign up.
3. Create a new "Web Service" and connect your GitHub repo.
4. Set the Start Command to `node index.js` and Environment to `Node 18` (or compatible).
5. Add environment variable `PORT` (Render sets one automatically; use the provided one or read `process.env.PORT`).
6. Deploy — Render will build and run your Express app.

### Quick steps for Vercel (example)
1. Push repo to GitHub.
2. Sign in to https://vercel.com and import the repo.
3. Choose "Node" and set the Root to the repository root.
4. Configure the build output (none needed for simple Express). For serverless, you may need to move handlers into `api/` as serverless functions.
5. Deploy.

## If you want GitHub Pages specifically
- Convert the project into a static site by adding a static `index.html` (or a frontend framework build) and then:
  - Put built static files into a `docs/` folder, commit and push.
  - In GitHub repo settings -> Pages, set source to `main` branch / `docs/` folder.

## Next steps I can take for you
- Convert this repo to a minimal static site and add GitHub Pages workflow.
- Create a `Procfile` and a short guide for deploying to Render/Vercel and optionally create a GitHub Actions workflow for Render or Vercel if you prefer automated deploys.

Tell me which option you want and I'll implement the files and workflows.
