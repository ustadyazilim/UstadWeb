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
      '@ustad-web-esinav': path.resolve(
        __dirname,
        '../../apps/ustad-web-esinav/src'
      ),
    };

    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      const cssLoader = rule.use.find(({ loader }) =>
        loader?.includes('css-loader')
      );
      if (cssLoader && cssLoader.options.modules) {
        cssLoader.options.modules.mode = 'local';
        cssLoader.options.modules.exportGlobals = true;
        cssLoader.options.modules.auto = true;
      }
    });

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
        source: '/esinav',
        destination: 'http://localhost:3003',
      },
      {
        source: '/esinav/:path*',
        destination: 'http://localhost:3003/:path*',
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
      {
        source: '/esinav/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    jsx: true,
    mdxRs: false,
    providerImportSource: "@mdx-js/react",
  },
});
const plugins = [withNx, withMDX];

module.exports = composePlugins(...plugins)(nextConfig);
