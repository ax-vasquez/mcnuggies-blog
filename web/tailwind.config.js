const colors = require('tailwindcss/colors')

module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // see https://tailwindcss.com/docs/theme#screens
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    // TODO: set the "common colors" the theme will use
    // see https://tailwindcss.com/docs/theme#colors
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    // see https://tailwindcss.com/docs/theme#spacing
    spacing: {},
  }
}