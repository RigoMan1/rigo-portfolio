// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['./modules/sui/module.ts', '@nuxtjs/tailwindcss'],
  css: ['./assets/styles/main.css'],
  tailwindcss: {
    exposeConfig: true,
    configPath: './tailwind.config.ts',
  },
});