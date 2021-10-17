/**
 * @see https://tailwindcss.com/docs/guides/gatsby
 */
module.exports = () => ({
    plugins: {
        'postcss-import': {},
        tailwindcss: {
            configPath: './tailwind.config.js',
            cssPath: './src/css/index.css',
            exposeConfig: false,
        },
        autoprefixer: {},
    },
})
