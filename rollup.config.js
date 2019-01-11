/* eslint-disable node/no-unsupported-features/es-syntax */
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

import pkg from './package.json'

const commonPlugins = [
  json(),
  nodeResolve(),
  commonjs({ ignoreGlobal: true }),
  babel({
    exclude: 'node_modules/**',
  }),
]

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: commonPlugins,
  },
]
