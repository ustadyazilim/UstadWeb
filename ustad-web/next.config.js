/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable all SWC features
  swcMinify: false,
  compiler: {
    // Disable SWC
    styledComponents: false,
    emotion: false,
    relay: false,
    removeConsole: false,
  },
  experimental: {
    forceSwcTransforms: false,
    swcTraceProfiling: false,
    swcMinifyDebugOptions: false,
  },
  // Use Babel
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
