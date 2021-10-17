require('dotenv').config({
    path: '.env',
})

module.exports = {
    siteMetadata: {
        title: 'CreatorsBlog',
    },
    plugins: [
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: process.env.SANITY_PROJECT,
                dataset: process.env.SANITY_DATASET,
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
        },
        // see https://www.gatsbyjs.com/plugins/gatsby-plugin-image
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                // Defaults used for gatsbyImageData and StaticImage
                defaults: {},
                // Set to false to allow builds to continue on image errors
                failOnError: true,
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true, // defaults to false
                // jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
    ],
}
