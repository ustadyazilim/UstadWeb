const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');
const typescript = require('rollup-plugin-typescript2');
const scss = require('rollup-plugin-scss');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: '../dist/shared',
    tsConfig: './tsconfig.lib.json',
    compiler: 'babel',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    format: ['esm'],
    assets: [{ input: '.', output: '.', glob: 'README.md' }],
  },
  {
    plugins: [
      scss({
        modules: true,
        output: 'dist/shared/styles.css',
      }),
      typescript({
        tsconfig: './tsconfig.lib.json',
        check: true,
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: true,
            declaration: true,
            declarationMap: true,
          },
        },
      }),
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000,
      }),
    ],
  }
);
