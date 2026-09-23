import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // GitHub Pages serves under /Resonix/; Vercel and local dev serve from root
  base: command === 'build' && !process.env.VERCEL ? '/Resonix/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
  },
}))
