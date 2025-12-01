import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/', // Serve site at the root of GitHub Pages
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