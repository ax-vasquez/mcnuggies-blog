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
  }
}

module.exports = nextConfig
