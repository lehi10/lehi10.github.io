# lehi10.github.io

Personal portfolio site built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Stack

- **Framework:** Astro 5
- **Icons:** astro-icon + @iconify-json/logos
- **Package manager:** pnpm
- **Deployment:** GitHub Actions → GitHub Pages

## Commands

All commands are run from the root of the project:

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `pnpm install`    | Install dependencies                        |
| `pnpm dev`        | Start local dev server at `localhost:4321`  |
| `pnpm build`      | Build production site to `./dist/`          |
| `pnpm preview`    | Preview the production build locally        |
| `pnpm astro ...`  | Run Astro CLI commands                      |

## Deploy

Pushes to `main` automatically trigger a build and deploy via GitHub Actions.
