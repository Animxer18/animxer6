const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.waifu.pics"],
  },
  output: 'standalone',
};

module.exports = withPWA(nextConfig);
