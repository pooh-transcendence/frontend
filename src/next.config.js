/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FT_CLIENT_ID: process.env.FT_CLIENT_ID,
        FT_CLIENT_SECRET: process.env.FT_CLIENT_SECRET,
      },
      async rewrites() {
        return [
          {
            source: "/:path*",
            destination: "http://192.168.1.3:3000/:path*",
          },
        ];
      },
}

module.exports = nextConfig
