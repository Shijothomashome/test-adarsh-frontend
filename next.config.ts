import { NextConfig } from 'next'

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
        destination: 'http://13.201.20.66:3000/api/:path*', // Proxies to your backend
      },
    ]
  },
}

export default nextConfig
