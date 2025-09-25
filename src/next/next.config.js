const path = require(`path`)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  sassOptions: {
    includePaths: [path.join(__dirname, `styles`)],
  },
  images: {
    remotePatterns: [
      {
        protocol: `https`,
        hostname: `cdn.sanity.io`,
        pathname: `**`,
      },
    ],
    formats: [`image/avif`, `image/webp`],
  },
  env: {
    HOST: process.env.HOST,
    SANITY_PROJECT: process.env.SANITY_PROJECT,
    SANITY_DATASET: process.env.SANITY_DATASET,
    GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
  }
}

module.exports = nextConfig
