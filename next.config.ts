import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Set basePath from env var for GH Pages
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  // Add other config options if needed
};

export default nextConfig;
