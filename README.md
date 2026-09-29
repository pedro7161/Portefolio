# Portefolio

Bilingual (EN / PT-PT) personal portfolio and CV — Angular 17 standalone components with signals, light/dark theme, deployed to GitHub Pages.

Live: https://pedro7161.github.io/Portefolio/

## Develop

```bash
npm install
npx ng serve            # http://localhost:4200/Portefolio/
npx ng test --watch=false
npx ng build
```

Tests run in Chrome if it's installed, otherwise Firefox (see `karma.conf.cjs`).

## Deploy

```bash
npx ng deploy           # angular-cli-ghpages → gh-pages branch
```

## Editing content

All text, experience, projects and links live in `src/app/portfolio-content.ts`, with `en` / `pt` variants side by side. The first tag of each project is shown as its label on the Projects page.
