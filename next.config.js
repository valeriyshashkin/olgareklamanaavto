/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [{ source: "/admin", destination: "/wp-admin", permanent: false }];
  },
};

module.exports = nextConfig;
