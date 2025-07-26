/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: '/ninjastrat_website',
  assetPrefix: '/ninjastrat_website',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for static export
  distDir: 'out',
}

module.exports = nextConfig 