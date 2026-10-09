import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ─── Base URL ──────────────────────────────────────────────────────────────
  // Use '/' for a custom domain or user/org page (username.github.io).
  // Change to '/your-repo-name/' if deploying to a GitHub project page.
  base: '/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  // ─── Dev Server ────────────────────────────────────────────────────────────
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },

  // ─── Production Build ──────────────────────────────────────────────────────
  build: {
    outDir: 'dist',
    sourcemap: false,           // disable source maps in prod (security)
    assetsInlineLimit: 4096,    // inline assets < 4 KB as base64
    target: 'es2020',           // modern browsers only
    rollupOptions: {
      output: {
        // Split vendor libs into a separate chunk for better caching
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});

