module.exports = {
  reactStrictMode: true,
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/olgareklamanaavto/",
  },
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
        destination: "/admin/contacts",
      },
    ];
  },
};
