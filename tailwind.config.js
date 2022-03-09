module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-main": 'rgb(45, 27, 105)',
        "purple-sidebar": 'rgba(40,24,93)',
      },
      lineHeight: {
        '12': '3rem',
        '14': '3.5rem',
      },
      borderWidth: {
        DEFAULT: '1px',
      }
    },
  },
  plugins: [],
}
