import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: '/goldenhour', // Set base path for GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  // Add other config options if needed
};

export default nextConfig;
