const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/digital-cv/' : '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};
