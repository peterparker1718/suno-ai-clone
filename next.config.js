/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // Suno AI clone specific configurations
  env: {
    SUNO_API_BASE: process.env.SUNO_API_BASE || 'http://localhost:3000/api',
  },
}

module.exports = nextConfig