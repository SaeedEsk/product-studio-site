# Northstar Studio

Single-page product engineering studio website built with Next.js, TypeScript, Tailwind CSS, and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

The inquiry form opens a pre-filled email in the visitor's default mail client and does not require a backend.

## Deploy with Cloudflare Pages

This site is configured as a static Next.js export. `npm run build` creates the
deployable `out/` directory.

1. Push this directory to its own GitHub repository.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select the repository and configure:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/`
4. Deploy the project.
5. In **Custom domains**, add the purchased domain and its `www` hostname.
6. Choose one canonical hostname and configure the other to redirect to it.

Cloudflare Pages does not need an environment variable or server for this
version. The contact form uses the visitor's default email client.

## Deploy with GitHub Pages temporarily

The repository includes `.github/workflows/deploy-pages.yml`. Every push to
`main` builds and deploys the static export through GitHub Actions. The build
automatically uses `/product-studio-site` as its repository base path, so the
project URL works before a custom domain is connected.

In the repository on GitHub, open **Settings → Pages** and set **Source** to
**GitHub Actions** if GitHub has not enabled it automatically. After the first
successful workflow, the temporary site will be available at:

`https://saeedesk.github.io/product-studio-site/`

## Domain checklist

- Check `northstarproductstudio.com` first, then `northstarbuilds.com`.
- Complete a final trademark and brand-conflict check before purchase.
- Cloudflare Registrar is the preferred registrar when the name is available.
- Enable auto-renewal and verify the registrant email after purchase.

## AWS alternative

AWS Amplify Hosting can deploy this repository from GitHub as an alternative.
Use the AWS Free Tier carefully, configure billing alerts, and remove unused
resources when no longer needed.
