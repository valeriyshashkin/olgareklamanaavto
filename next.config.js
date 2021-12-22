module.exports = {
  images: {
    loader: "cloudinary",
    path: "res.cloudinary.com",  
  },
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
        destination: "/admin/contacts",
      }
    ];
  },
};
