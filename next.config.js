/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/20vc",
  async redirects() {
    return [{ source: "/", destination: "/20vc", basePath: false, permanent: false }];
  },
};
module.exports = nextConfig;
