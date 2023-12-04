const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'cdn.sanity.io'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    SANITY_PROJECT: process.env.SANITY_PROJECT,
    SANITY_DATASET: process.env.SANITY_DATASET
  }
}

module.exports = nextConfig
