import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(import.meta.dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.antarakicepat.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
