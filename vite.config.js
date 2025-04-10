import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  import { VitePWA } from 'vite-plugin-pwa'

  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
  base: '/your-repo-name/',
})
