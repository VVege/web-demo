/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-unresolved */
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/meta/broadcast/',
  plugins: [
    eslintPlugin({ 
      cache: false,
      exclude: ['./node_modules/**']
     }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'packages/vangogh/VideoExporter/workers',
          dest: './'
        }
      ]
    })
  ],
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '@util': fileURLToPath(new URL('./packages/util', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve(__dirname, 'node_modules/@bcst/styles/src/themes/global.less')}";`
        },
        javascriptEnabled: true
      }
    }
  },
  server: {
    headers: {
      'Cross-Origin-Resource-Policy': 'cross-origin',
      'Access-Control-Allow-Origin': 'https://resources.laihua.com',
      'Access-Control-Allow-Credentials': 'true'
    },
    proxy: {
      '/api': {
        target: 'https://beta.laihua.com',
        // target: 'https://www.laihua.com/',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
      '/webapi': {
        target: 'https://beta.laihua.com/webapi',
        // target: 'https://www.laihua.com/webapi',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, ""),
      }
    },
    hmr: {
      overlay: false
    },
    host: '0.0.0.0',
  }

});
