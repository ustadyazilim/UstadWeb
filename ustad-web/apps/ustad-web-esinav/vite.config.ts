/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import preact from '@preact/preset-vite';
import path from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/ustad-web-esinav',

  resolve: {
    alias: {
      '@esinav': path.resolve(__dirname, './src'),
      preact: path.resolve(__dirname, '../../node_modules/preact'),
      '@preact': path.resolve(__dirname, '../../node_modules/@preact'),
    },
  },

  server: {
    port: 3003,
    host: 'localhost',
    cors: true,
  },

  preview: {
    port: 3003,
    host: 'localhost',
  },

  plugins: [preact(), nxViteTsPaths()],

  build: {
    outDir: '../../dist/apps/ustad-web-esinav',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
