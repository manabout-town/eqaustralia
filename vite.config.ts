import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { jsonLd } from './src/seo/jsonld.ts'

const seo = (): Plugin => ({
  name: 'site-seo',
  transformIndexHtml(html) {
    if (!html.includes('<!--jsonld-->')) throw new Error('jsonld 자리 없음')
    return html.replace('<!--jsonld-->', `<script type="application/ld+json">${JSON.stringify(jsonLd())}</script>`)
  },
})

export default defineConfig({ plugins: [react(), seo()] })
