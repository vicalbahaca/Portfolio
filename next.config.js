/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'coubber.com',
      },
      {
        protocol: 'https',
        hostname: 'aaaquest.com',
      },
      {
        protocol: 'https',
        hostname: 'mycoach-27z4.onrender.com',
      },
    ],
  },
}

module.exports = nextConfig
