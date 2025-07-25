/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ninjastrat_website',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for static export
  distDir: 'out',
}

module.exports = nextConfig 