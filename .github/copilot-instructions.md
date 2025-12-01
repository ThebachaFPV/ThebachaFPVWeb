# Thebacha FPV Racing League - Copilot Instructions

## Project Overview

This is a React + Vite static website for the Thebacha FPV Racing League, deployed via GitHub Pages. It combines equipment recommendations, educational content, weather forecasts, and YouTube video integration for the FPV drone racing community in Northern Canada.

## Architecture & Key Patterns

### Project Structure

- **Static Content**: Markdown files in `foundations/` (league documents) and `regs/` (regulations) are directly linked via GitHub URLs
- **React SPA**: Standard Vite + React Router setup with responsive mobile/desktop layout
- **Asset Management**: Uses `vite-plugin-static-copy` to copy image assets from `src/assets/` to build output
- **Product System**: Dynamic product imports via `import.meta.glob` pattern in `src/products/`

### Responsive Layout Pattern

The app uses a distinctive layout pattern in `App.tsx`:

- Desktop: Fixed sidebar + main content with right margin (320px)
- Mobile (≤900px): Sidebar flows after main content, no right margin
- Check: `window.innerWidth <= 900` with resize listener

### Product Definition Pattern

Products follow a specific structure in `src/products/*.product.tsx`:

```tsx
const Product = {
  id: "unique-id",
  name: "Product Name",
  price: 123.45,
  description: "Long description...",
  category: "drones|accessories|etc",
  sources: ["https://rotorvillage.ca/..."],
};
export default Product;
```

Auto-imported via glob pattern in `src/products/index.tsx`.

## Development Workflows

### Local Development

```bash
npm run dev          # Dev server on :5173
npm run build        # Production build to dist/
npm run preview      # Preview production build on :4173
```

### Testing

- **E2E Tests**: Playwright configuration runs tests against preview server (port 4173)
- **Screenshots**: Tests generate screenshots saved to `screenshots/` directory
- **CI**: Daily automated runs via GitHub Actions + manual dispatch

### Deployment

- Build copies `CNAME` file to `dist/` for GitHub Pages custom domain
- GitHub Pages auto-deploys from main branch
- Weather forecast images updated daily via scheduled GitHub Action

## External Integrations

### Weather Forecasting

The `/wx` route displays specialized weather forecasts from multiple sources:

- SpotWx.com HRDPS/RDPS forecasts for Fort Smith & Hay River
- OkToFly.com flight conditions
- NRCAN drone maps
- Images stored in `src/assets/forecast-images/` and auto-updated by CI

### YouTube Integration

Uses `react-youtube` with custom playlist component (`EnhancedYouTubePlaylist`):

- Supports playlist ID-based embedding
- Custom controls and responsive sizing
- Playlist navigation and video metadata display

### Equipment Partners

Primary integration with RotorVillage.ca for equipment recommendations.

## Content Management

### Equipment/Products

Add new products by creating `*.product.tsx` files in `src/products/` - they're auto-imported.

### Educational Content

Link directly to markdown files in `foundations/` and `regs/` via GitHub blob URLs for reference material.

### Navigation

Update routes in `App.tsx` and add corresponding page components in `src/pages/`.

## Key Dependencies

- **React 19** + **React Router 7**
- **Vite 6** with React plugin
- **Playwright** for E2E testing
- **react-youtube** for video embedding
- Asset copying via **vite-plugin-static-copy**

## Important Conventions

- All external links use `target="_blank" rel="noopener noreferrer"`
- CSS uses CSS custom properties (e.g., `var(--white)`)
- Mobile-first responsive design with 900px breakpoint
- Component files use `.tsx` extension consistently
