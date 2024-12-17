import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ThebachaFPV', // Remove the trailing slash
  server: {
    port: 5173,
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});