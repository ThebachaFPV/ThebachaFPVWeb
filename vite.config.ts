import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/ThebachaFPV', // Ensure this matches your GitHub Pages repository name
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
      ],
    }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});