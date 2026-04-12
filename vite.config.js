import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/marcusvance/' : '/',
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
})
