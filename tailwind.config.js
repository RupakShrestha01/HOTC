module.exports = {
  content: [
    './assets/**/*.css',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './*.{vue,js,}',
    ,
  ],
  theme: {
    extend: {
      fontFamily: {
        ane: ['Anek Malayalam', 'sans-serif'],
      },
    },
    screens: {
      sm: '375px',
      // => @media (min-width: 640px) { ... }

      md: '820px',
      // => @media (min-width: 1024px) { ... }

      lg: '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    height: {
      128: '37rem',
      100: '35rem',
    },
  },

  plugins: [],
}
