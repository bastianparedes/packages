const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const copy = require('rollup-plugin-copy');

const input = './index.ts';
const output = {
  file: '../../utils/index.js',
  format: 'umd',
  name: 'index.js'
};
const plugins = [
  babel({
    babelHelpers: 'bundled',
    exclude: /node_modules/,
    extensions: ['.ts'],
    presets: ['@babel/preset-env', '@babel/preset-typescript']
  }),
  commonjs(),
  copy({
    targets: [{ dest: '../../utils', src: 'package.json' }]
  }),
  nodeResolve({
    browser: true
  }),
  typescript({
    tsconfig: './tsconfig.json'
  })
];

module.exports = {
  input,
  output,
  plugins
};
