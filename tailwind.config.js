module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3b82f6', // Valeur par défaut de blue-500
        }
      }
    }
  },
  plugins: [],
}