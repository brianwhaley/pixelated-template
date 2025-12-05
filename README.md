# Pixelated Template

Starter template for Pixelated (Next.js + TypeScript). Use `degit` for a quick local start, or use as a GitHub Template and/or Next.js example.

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
