# No Quiet Nights

Editable Next.js source for the No Quiet Nights hospitality marketing website.

## Deployment workflow

Work is developed on branches, previewed automatically in Vercel, and merged to `main` only after approval. Vercel deploys `main` to production.

## Technical SEO

The current SEO completion branch restores and optimises the core public routes, including pricing, insights, about, restaurants, pubs and bars, drinks brands, work, privacy and photography credits. Commercial/indexable pages are included in the XML sitemap; utility pages such as privacy and credits remain crawlable but are marked `noindex, follow`.

## Recovery

The `recovery/` directory contains rendered pages and deployed assets recovered from the earlier production build. It is preserved as a reference source while the site is rebuilt into editable Next.js routes.
