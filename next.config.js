/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.amord.pro',
      },
      {
        protocol: 'http',
        hostname: 'api.amord.pro',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
