/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FT_CLIENT_ID: process.env.FT_CLIENT_ID,
    FT_CLIENT_SECRET: process.env.FT_CLIENT_SECRET,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://13.59.201.111/backend/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
