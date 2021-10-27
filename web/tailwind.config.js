const colors = require('tailwindcss/colors')

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
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
            blue: colors.sky,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            // TODO: Investigate why this doesn't work within Gatsby
            // keyframes: {
            //     'bounce-x': {
            //         '0%, 100%': {
            //             transform: 'translateX(-10em)',
            //             'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
            //         },
            //         '50%': {
            //             transform: 'translateX(0)',
            //             'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
            //         },
            //     }
            // },
            // animation: {
            //     'bounce-x': 'bounce-x 1s infinte'
            // },
        },
        // see https://tailwindcss.com/docs/theme#spacing
        spacing: {},
    },
}
