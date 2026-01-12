/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    cacheComponents: true, // PPR activé
    reactCompiler: true,   // React Compiler
  },
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
