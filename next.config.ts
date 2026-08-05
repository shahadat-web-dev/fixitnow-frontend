import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.fixitnow.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      {
        protocol: "https",
        hostname: "cdn.fixitnow.com",
      },
    ],
  },
};

export default nextConfig;
