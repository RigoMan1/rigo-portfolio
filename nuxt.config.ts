// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    './modules/sui/module.ts',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
  ],
  css: ['./assets/styles/main.css'],
  tailwindcss: {
    exposeConfig: true,
    configPath: './tailwind.config.ts',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
});