import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // 1. Image Optimization & Remote Patterns
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'ik.imagekit.io' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
    ],
  },

  // 2. Security Headers (DevSecOps Layer)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; connect-src 'self' https:; object-src 'none'; frame-ancestors 'none';",
          },
          { key: 'X-Frame-Options', value: 'DENY' }, // Prevents clickjacking
          { key: 'X-Content-Type-Options', value: 'nosniff' }, // Prevents MIME-sniffing
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' }, // Forces HTTPS
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), gyroscope=(), magnetometer=(), payment=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
    ]
  },
}

export default nextConfig
