import { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const apiDestination = isProd
  ? 'https://13.201.20.66:3000'
  : 'http://13.201.20.66:3000'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiDestination}/api/:path*`,
      },
    ]
  },
}

export default nextConfig
