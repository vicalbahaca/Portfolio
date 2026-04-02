const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const basePath = isGitHubActions && repositoryName ? `/${repositoryName}` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
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
