/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.devServer = {
      disableHostCheck: true,
    };

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
