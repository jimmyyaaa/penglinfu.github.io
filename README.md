# Penglin Fu’s personal website

React + TypeScript + Vite, hosted on GitHub Pages at https://penglinfu.me.

## Local development

```sh
npm ci
npm run dev
```

Pages: `/` (Home), `/?page=research` (Research), `/?page=gallery` (Gallery).
The original `#research` and `#gallery` links also remain supported.
Content is maintained in `src/site-data.ts`; layout and styles live in `src/App.tsx` and `src/site.css`.

## Verify and deploy

```sh
npm run build
npm run preview
```

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys `dist` to GitHub Pages. The workflow can also be run manually. Confirm the deployment succeeds before checking the live site.
