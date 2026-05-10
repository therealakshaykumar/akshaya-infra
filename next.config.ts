import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['192.168.0.109'],
  images: {
    qualities: [60,70,80,90,100],
  }
};

export default nextConfig;
