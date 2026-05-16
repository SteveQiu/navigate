# Copilot instructions for this repository

## Build, lint, and test commands

- Install dependencies: `npm install`
- Start local dev server (hot reload): `npm run serve` (alias: `npm start`)
- Production build: `npm run build`
- Lint: `npm run lint`
- Single test: no test runner or `test` script is configured in `package.json` right now.

## High-level architecture

- This is a Vue 2 single-page app built with Vue CLI (`@vue/cli-service`) and Vue Router 3.
- Entrypoint flow:
  - `src/main.js` creates the root Vue instance and attaches router config from `src/route.js`.
  - `src/application.vue` is the app shell (fixed header + `<router-view>` content outlet).
  - `src/route.js` defines three routes: `/`, `/projects`, and `/contact`.
- Page composition:
  - `src/components/home.vue` composes `Welcome`, `Introduction`, and `PhoneContainer`.
  - `PhoneContainer.vue` and `Introduction.vue` use `IntersectionObserver`-driven animation/state logic.
  - `home.vue` initializes `rellax` for parallax effects used by `Welcome.vue`.
- Build output and deploy coupling:
  - `vue.config.js` sets `outputDir` to `web\`.
  - `.github/workflows/azure-static-web-apps-witty-glacier-03a03f010.yml` deploys with Azure Static Web Apps and references `web/`.

## Key conventions in this codebase

- Use Vue 2 Options API patterns (`data`, `computed`, `mounted`, `methods`) in SFCs; no Composition API usage exists.
- Keep routing centralized in `src/route.js` as a router options object consumed by `new VueRouter(route)`.
- Component registration/import style is mixed but established: PascalCase imports with kebab-case tags in templates (e.g., `WelcomeBanner` -> `<welcome-banner />`).
- Most component styles are `scoped`; many styles use `lang="less"`.
- Asset references in templates/styles are usually relative to component files (e.g., `../assets/img/...`), not alias-based imports.
