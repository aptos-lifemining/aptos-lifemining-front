/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    config.devServer = {
      disableHostCheck: true,
    };

    return config;
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    transpilePackages: ['wallet-adapter-react'],
  },
  images: {
    domains: ['dev-static-files.uzumeta.com'],
  },
};

module.exports = nextConfig;
