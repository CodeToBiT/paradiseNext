/** @type {import('next').NextConfig} */

const path = require("path")
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["admin.pdes.com.np"],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
}

module.exports = nextConfig
