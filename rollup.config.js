const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');

const input = './index.tsx';
const output = {
  file: './dist/index.js',
  format: 'umd',
  name: 'index.js'
};
const plugins = [
  nodeResolve({
    browser: true
  }),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: /node_modules/,
    extensions: ['.ts', '.tsx'],
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript'
    ]
  }),

  typescript({
    tsconfig: './tsconfig.json'
  }),
  postcss()
];

module.exports = {
  input,
  output,
  plugins
};
