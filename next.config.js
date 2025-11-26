/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Required for GitHub Pages static export
  output: "export",

  // Disable Next.js image optimization (required for next export)
  images: {
    unoptimized: true,
  },

  // (Optional) Asset prefix for GitHub Pages root domain
  assetPrefix: isProd ? '/' : '',
};

module.exports = nextConfig;
