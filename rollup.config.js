import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'index.js',

    output: [
      {
        name: 'smartSelectorsAPI',
        file: 'dist/smart-selectors-api.cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    plugins: [resolve({ preferBuiltins: true }), commonjs(), json()],
  },
];
