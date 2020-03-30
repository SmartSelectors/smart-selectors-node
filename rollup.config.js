import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "index.js",
    sourceMap: true,
    output: [
      {
        name: "smartSelectorsAPI",
        file: "dist/smart-selectors-api.cjs.js",
        format: "cjs"
      }
      // ,
      // {
      //   name: "smartSelectorsAPI",
      //   file: "dist/smart-selectors-api.es.js",
      //   format: "es" // cjs, es
      // }
    ],
    plugins: [
      resolve({ preferBuiltins: true }), // so Rollup can find `ms`
      commonjs() // so Rollup can convert `ms` to an ES module
    ]
  }
];
