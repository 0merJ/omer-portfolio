# Omer Muhammad Javed — Robotics, AI & Autonomous Systems

A single-page personal portfolio built with React, TypeScript and Vite. It positions Omer as an early-career engineer working across artificial intelligence, computer vision, robotics software and autonomous systems.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Maintaining the site

- Project content, skills and work history live in [`src/data.ts`](./src/data.ts).
- Reusable UI is in `src/components/`; the page composition is in `src/App.tsx`.
- Global responsive styling is in [`src/styles/global.css`](./src/styles/global.css).
- Add photographs, screenshots, diagrams, videos and the CV under `public/assets/` as described in [`ASSETS.md`](./ASSETS.md).
- Optional project links can be added to each project in `src/data.ts`; unavailable links are not rendered.
- Replace the favicon in `public/favicon.svg` and the social preview image in `index.html` when final assets are available.

## Deployment

This is a static Vite site and can be deployed to GitHub Pages, Netlify or another static host. For GitHub Pages, set the Vite `base` to `/<repository-name>/` in `vite.config.ts` if the site is served from a repository subpath, run `npm run build`, and publish the generated `dist/` directory using GitHub Pages or an Actions workflow. No deployment or repository settings are configured by this project.

## Content notes

Unavailable media is omitted from the project galleries. The Leo Rover project is explicitly marked in progress, and no unverified performance, completion or repository claims are included.
