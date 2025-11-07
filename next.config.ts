import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable Partial Prerendering via cacheComponents (replaces experimental.ppr)
  experimental: {
    cacheComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: "https",
        hostname: "th.bing.com", // 👈 add this line
      },
    ],
  },
};

export default nextConfig;
