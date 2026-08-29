# No Quiet Nights

This repository contains a recovery snapshot of the live **NO QUIET NIGHTS** website deployed on Vercel.

## Recovery status

The production website was deployed directly from a Codex workspace using the Vercel CLI, rather than from GitHub. Vercel confirms that the successful build extracted 41 deployment files, but the connected Vercel interface does not expose the original uploaded Next.js source tree for download.

To avoid falsely presenting reconstructed files as the original source, this repository preserves:

- rendered HTML for every public route found in the production build
- referenced deployed CSS and JavaScript chunks that can be retrieved as text
- robots.txt and sitemap.xml
- the SVG favicon
- an image manifest pointing to the binary image assets still hosted by Vercel
- deployment metadata and recovery notes

See `recovery/README.md` for details.

Production: https://no-quiet-nights.vercel.app
