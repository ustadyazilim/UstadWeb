const path = require('path');
const { composePlugins, withNx } = require('@nx/next');
const createMDX = require('@next/mdx');

const nextConfig = {
  transpilePackages: ['shared'],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@shared': path.resolve(__dirname, '../../shared/src/lib'),
      '@ustad-web-chatbot': path.resolve(
        __dirname,
        '../../apps/ustad-web-chatbot/src'
      ),
    };

    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/static/:path*',
        destination: 'http://localhost:5001/static/:path*',
        basePath: false,
      },
      {
        source: '/api/chat/:path*',
        destination: 'http://localhost:5001/:path*',
        basePath: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
      {
        source: '/api/chat/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },
};

const withMDX = createMDX({});
const plugins = [withNx, withMDX];

module.exports = composePlugins(...plugins)(nextConfig);
