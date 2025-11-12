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
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-icon',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  }, 
   runtimeConfig: {
    public: {
      formsubmitUrl: 'https://formsubmit.co/ajax/quistevaristecredo@gmail.com'
    }
  }
})