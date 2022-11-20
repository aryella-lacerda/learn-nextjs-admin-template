/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    images: {
      minimumCacheTTL: 30,
    },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/random",
      },
    ],
  },
};

module.exports = nextConfig;
