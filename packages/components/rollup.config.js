const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const copy = require('rollup-plugin-copy');
const postcss = require('rollup-plugin-postcss');

const input = './index.tsx';
const output = {
  file: '../../components/index.js',
  format: 'umd',
  name: 'index.js'
};
const plugins = [
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
  commonjs(),
  copy({
    targets: [{ dest: '../../components', src: 'package.json' }]
  }),
  nodeResolve({
    browser: true
  }),
  postcss(),
  typescript({
    tsconfig: './tsconfig.json'
  })
];

module.exports = {
  input,
  output,
  plugins
};
