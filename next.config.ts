import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Set basePath from env var for GH Pages
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '', // Add assetPrefix for static assets
  // Removed images: { unoptimized: true } to test default behavior
  // Add other config options if needed
};

export default nextConfig;
