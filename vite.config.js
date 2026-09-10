import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

// Default-deny indexing. The staging build must never compete with the client's
// live site, so noindex ships unless VITE_SITE_INDEXABLE is explicitly "true".
// MUST be set to "true" in the production environment at launch, or the live
// site will never be indexed.
function indexingPolicy(indexable) {
  return {
    name: 'aayds-indexing-policy',
    transformIndexHtml(html) {
      if (indexable) return html
      return html.replace(
        '</head>',
        '    <meta name="robots" content="noindex, nofollow" />\n  </head>',
      )
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: indexable
          ? 'User-agent: *\nAllow: /\n'
          : 'User-agent: *\nDisallow: /\n',
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const indexable = env.VITE_SITE_INDEXABLE === 'true'

  return {
    plugins: [react(), tailwindcss(), indexingPolicy(indexable)],
    build: {
      // Long-lived vendor chunks so a content change does not invalidate React
      // and framer-motion in visitors' caches.
      rolldownOptions: {
        output: {
          advancedChunks: {
            groups: [
              { name: 'react', test: /node_modules[\/](react|react-dom|scheduler|react-router)/ },
              { name: 'motion', test: /node_modules[\/](framer-motion|motion)/ },
            ],
          },
        },
      },
    },
  }
})
