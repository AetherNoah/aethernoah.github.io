# Haoran Qian — Personal Homepage

Personal academic website for Haoran Qian / 钱皓冉.

**Live:** https://aethernoah.github.io/

Built with Astro, TypeScript, Markdown / MDX, and KaTeX. GitHub Actions builds and publishes the site to GitHub Pages after every push to `main`.

## Local development

Use Node.js 24.

```sh
npm ci
npm run dev
```

`npm run build` runs Astro's checks and creates the static site in `dist/`. `npm run preview` serves the built site locally.

## Updating content

- Profile and CV URL: `src/data/site.ts`
- PDF CV: `public/cv.pdf`
- Publications: `src/content/research/` — use `kind: Publications`
- Projects: `src/content/projects/`
- Research experience and education: `src/content/experience/` — set `type` and `featured` as appropriate
- News: `src/content/recent/`
- Photography and writing: `src/content/fragments/`
- Notes: `src/content/notes/`

Entries with `draft: true` are excluded from the build. Example notes are explicitly marked with `sample: true`.

The site icon and header avatar are derived from [AetherNoah's GitHub avatar](https://github.com/AetherNoah). Photograph and paper-figure credits remain with the corresponding content. Third-party assets retain their original ownership.

## Deployment

The repository is named `aethernoah.github.io`, so the site runs at the domain root. No project `base` path is required. Canonical URLs, OpenGraph URLs, the sitemap, and Notes RSS use `https://aethernoah.github.io`.

GitHub Pages must use **GitHub Actions** as its publishing source. The workflow is `.github/workflows/deploy.yml`. No additional deployment credentials are needed.
