module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, html}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B5351',
        secondary: '#91C7B1',
      },
      gridTemplateRows: {
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      gridRow: {
        'span-10': 'span 10 / span 10',
        'span-13': 'span 13 / span 13',
      },
      boxShadow: {
        '3xl': '0 7px 5px  rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}