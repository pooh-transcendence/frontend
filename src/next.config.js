/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FT_CLIENT_ID: process.env.FT_CLIENT_ID,
        FT_CLIENT_SECRET: process.env.FT_CLIENT_SECRET,
      },
}

module.exports = nextConfig
