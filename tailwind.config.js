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
        primary: '#3B8EED',
        blue: {
          500: '#3B8EED',
          600: '#3B8EED',
          900: '#1e3a8a',
        }
      }
    }
  },
  plugins: [],
}