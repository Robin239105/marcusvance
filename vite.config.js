import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.GITHUB_PAGES ? '/Trinity-and-Marcus/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    modulePreload: {
      polyfill: false
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('lucide-react')) {
              return 'vendor-core';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animation';
            }
            return 'vendor';
          }
        }
      }
    }
  }
}))
