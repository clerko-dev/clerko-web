import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',  // Added: For correct asset paths on Vercel
  server: {
    port: 3000,  // Added: Default dev port
    open: true,  // Added: Auto-open browser on dev
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        }
      }
    }
  },
  optimizeDeps: {
    include: ['jspdf', 'html2canvas'],  // Added: Pre-bundle heavy deps for faster dev
  }
})