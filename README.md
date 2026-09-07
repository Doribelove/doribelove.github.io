# Dori — Robotics & AI Systems

Personal project portfolio for [Doribelove](https://github.com/Doribelove), built as a static site for GitHub Pages.

## Local preview

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The deployable static site is generated in `dist/client`.

## Publish

1. Create the public repository `doribelove.github.io` under the `Doribelove` account.
2. Push this project to its `main` branch.
3. Open **Settings → Pages → Build and deployment** and select **GitHub Actions**.
4. The included workflow builds and publishes the site automatically.

The public URL is `https://doribelove.github.io/`.
