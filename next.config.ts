import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack configuration for Next.js 15
  turbopack: {
    root: '/Users/lucaspradel/Documents/Dev/healthbridge'
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Compression
  compress: true,

  // PoweredByHeader
  poweredByHeader: false,
};

export default nextConfig;
