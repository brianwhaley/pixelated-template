# Pixelated Template

Starter template for Pixelated (Next.js + TypeScript). Use `degit` for a quick local start, or use as a GitHub Template and/or Next.js example.

NOTE: This template uses the Next.js App Router (src/app). The older `pages/` router is not included by default; if you prefer `pages/` routing, copy or adapt the example code into a `pages` directory.

## Quick start (degit)

```bash
# using degit
npx degit brianwhaley/pixelated-template my-site
cd my-site
node scripts/setup.js my-site git@github.com:brianwhaley/my-site.git
npm install
npm run dev
```

## Create a GitHub repo from this template (with `gh`):

```bash
# Creates a new repo from template on github
gh repo create my-site --template brianwhaley/pixelated-template --public
gh repo clone my-site
cd my-site
node scripts/setup.js my-site git@github.com:brianwhaley/my-site.git
npm install && npm run dev
```

## Use with `create-next-app --example` (optional)

If you host an example branch or repo for Next.js examples, users can do:

```bash
npx create-next-app my-site --example https://github.com/brianwhaley/pixelated-template
```

## Updating early projects created with degit

If you created a project with degit and later want to pull template changes, add the template remote and pull:

```bash
git remote add template https://github.com/brianwhaley/pixelated-template.git
git fetch template
git merge template/main
# or use the provided script:
# ./scripts/upstream-merge.sh https://github.com/brianwhaley/pixelated-template.git
```

## Licence
MIT

## Local config

This template reads a unified Pixelated config via the environment variables `PIXELATED_CONFIG_JSON` or `PIXELATED_CONFIG_B64`. For local development, copy `.env.local.example` to `.env.local` and set `PIXELATED_CONFIG_B64` or `PIXELATED_CONFIG_JSON`.

If you prefer a JSON file locally, copy `.local/pixelated.config.json.example` to `.local/pixelated.config.json` and set `PIXELATED_CONFIG_B64` to the base64-encoded contents.

Home page and routing

IMPORTANT: This template uses the App Router (`src/app`) — avoid adding a classic `pages/` directory that duplicates routes. If you add `pages/`, be sure not to overlap route paths with `src/app`.
The template ships with the root `layout.tsx` under `src/app` for shared HEAD/meta and header/footer layout. The sample home page is provided at `src/app/(pages)/(home)/page.tsx` (route group). If you need to create additional pages, add them under `src/app` as nested folders and `page.tsx` files.

Path aliases
------------

This template defines the `@` path alias that resolves to `src`, so you can import files from the app root using e.g. `import Header from '@/app/elements/header'`.
The alias is configured in `tsconfig.json` and `next.config.ts` (webpack alias), and ESLint is set up to resolve it.

Notes: this repository uses `next.config.ts` as the canonical Next.js configuration. If you see a `next.config.js`, it's safe to delete it; `next.config.ts` is the authoritative file and includes the webpack alias configuration.
