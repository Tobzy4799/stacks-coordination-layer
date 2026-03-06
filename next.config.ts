// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    esmExternals: true, // This allows importing ESM packages
  },
  transpilePackages: ['@stacks/connect'], // Ensure it's transpiled
};

export default nextConfig;

