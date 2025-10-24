import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/image'
  ],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts'
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  }
})