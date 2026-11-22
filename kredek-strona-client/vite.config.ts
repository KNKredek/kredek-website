import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr';
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
    }
  }
})
