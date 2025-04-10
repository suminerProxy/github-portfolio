import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const { VitePWA } = require('vite-plugin-pwa')

module.exports = defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
  base: '/github-portfolio/', // ⚠️ 替换为你的仓库名
})
