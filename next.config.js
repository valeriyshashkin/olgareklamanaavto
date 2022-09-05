/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: [process.env.DOMAIN],
  },
};

module.exports = nextConfig;
