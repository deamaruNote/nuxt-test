// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt/config';
// import { resolve } from 'path';

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt-test/' : '/',
    buildAssetsDir: '/static/'
  },
  alias: {
    // '@components': resolve(__dirname, './components'),
    // '@assets': resolve(__dirname, './assets'),
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'home',
        path: '/',
        component: resolve(__dirname, 'pages/index.vue')
      });
    }
  },
  // css: ['~/assets/scss/main.scss'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    analyze: true,
    terser: {
      terserOptions: {
        keep_fnames: true,
      }
    }
  }
})
