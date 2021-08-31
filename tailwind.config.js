module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          'moderate-cyan': 'hsl(176, 50%, 47%)',
          'dark-cyan': 'hsl(176, 72%, 28%)',
        },
        neutral: {
          'black': 'hsl(0, 0%, 0%)',
          'dark-gray': 'hsl(0, 0%, 48%)'
        },
      },
      
      fontFamily: {
        sans: ['Commissioner', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
