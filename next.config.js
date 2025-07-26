/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/ninjastrat_website' : '',
  assetPrefix: isProd ? '/ninjastrat_website' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for static export
  distDir: 'out',
}

module.exports = nextConfig 