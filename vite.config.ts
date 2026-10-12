import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// Production build is independent of Figma Make's unpublished .figma/make/site.json.
// SEO metadata, robots.txt and HTML for each page are generated during prerender.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT || 8443),
    proxy: { '/api': { target: 'http://localhost:8080', changeOrigin: true } },
  },
  preview: { host: '0.0.0.0', port: Number(process.env.PORT || 8443) },
});
