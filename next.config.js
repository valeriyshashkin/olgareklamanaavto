module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/admin",
        has: [
          {
            type: "cookie",
            key: "auth",
          },
        ],
        permanent: false,
        destination: "/admin/dashboard",
      }
    ];
  },
};
