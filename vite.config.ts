import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/', // Serve site at the root of GitHub Pages
  // Stamped at build time so the footer cannot go stale by itself. The footer
  // previously carried a hand-typed "Last modified: Oct 26, 2025" and a
  // "© 2025", both of which were over a year out of date — the same failure as
  // the event calendar: a date a human has to remember to change.
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
  server: {
    port: 5173,
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/product-images',
          dest: 'assets',
        },
        {
          src: 'src/assets/rotor_village_logo.webp',
          dest: 'assets',
        },
        {
          src: 'src/assets/forecast-images',
          dest: 'assets',
        },
        {
          src: 'src/assets/sponsors',
          dest: 'assets',
        },
      ],
    }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});