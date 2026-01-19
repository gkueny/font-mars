# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run start` or `npm run develop` - Start development server
- `npm run build` - Build production site
- `npm run serve` - Serve production build locally
- `npm run clean` - Clear Gatsby cache
- `npm run format` - Format code with Prettier

## Architecture

This is a Gatsby 4 site for Domaine Font-Mars, a French winery. It's a bilingual site (French/English) with wine product pages.

### Key Structure

- **Pages**: `src/pages/` contains page components. French pages are at root, English pages under `en/` subdirectory. All pages get duplicated to `/fr/` prefix via `gatsby-node.js`.
- **Wine Pages**: Generated dynamically from Markdown files in `content/wines/fr/` and `content/wines/en/` using `src/templates/WineTemplate.js`.
- **Components**: `src/components/` - React components with `ComponentName/index.js` barrel pattern.
- **Content**: `content/` directory contains Markdown wine descriptions and image assets.

### Wine Content

Wine data is stored as Markdown with frontmatter:
- `slug` - URL path (e.g., `/picpoul`, `/en/picpoul`)
- `title`, `description`, `commentary`
- `bottle`, `background`, `mobileBackground` - Image references
- `order` - Sort order for wine listing

### Styling

Uses Tailwind CSS integrated via PostCSS through `gatsby-plugin-sass`. Global styles in `src/index.scss`.

### Special Configurations

- Leaflet (map library) is null-loaded during SSR in `gatsby-node.js` to prevent build errors.
- Language is determined from slug path (`/en/` prefix = English, otherwise French).
