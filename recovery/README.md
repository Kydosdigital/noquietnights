# No Quiet Nights Vercel recovery

This folder preserves the deployable output we can safely retrieve from the live Vercel production deployment.

## Recovery source

- Vercel project: `no-quiet-nights`
- Project ID: `prj_a6cfansNrJmEBJO0CpZkHNTlWSOl`
- Production deployment: `dpl_DqAfb8pCHRXy9SnYwskSq7sjuk1M`
- Original CLI deployment: `dpl_GpJ67vGeNM6FuqYa9YzCWHWrGgxu`
- Production URL: https://no-quiet-nights.vercel.app
- Framework detected by Vercel: Next.js 16.2.6
- Bundler: Turbopack
- Deployment source: Vercel CLI
- Deployment actor: Codex
- Vercel build log: 41 deployment files extracted

## Recovered

- 11 rendered public HTML pages
- robots.txt
- sitemap.xml
- favicon.svg
- production CSS
- 12 referenced deployed JavaScript chunks
- manifest for the 7 JPEG image assets

## Important limitation

This is **not the original editable Next.js/TypeScript source tree**.

The original source was uploaded to Vercel directly from a Codex workspace and was never connected to GitHub. The Vercel connection available here confirms the source package was uploaded for the build, but it does not provide an export of those original `.tsx`, component, configuration and public binary files.

This recovery therefore preserves the live rendered site and its retrievable deployed assets without pretending reconstructed files are the original source.

## Structure

- `rendered/` contains the public pages and site-level files.
- `deployed-assets/` contains the CSS and JavaScript chunks referenced across the public pages.
- `image-manifest.txt` records the seven production image URLs.
- `deployment.json` records the deployment facts used for this recovery.
