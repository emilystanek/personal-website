/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-website',
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
