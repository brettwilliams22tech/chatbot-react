import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from "@rollup/plugin-image";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import packageJson from "./package.json";

function createOutput() {
  return {
    file: "./dist/index.min.js",
    format: "esm",
    // Removes the hash from the asset filename
    assetFileNames: "[name][extname]",
  };
}

const plugins = [
  commonjs(),
  peerDepsExternal(),
  nodeResolve(),
  postcss({
    modules: true,
    autoModules: true,
    extract: false,
    writeDefinitions: true,
    extensions: [".css"],
  }),
  image(),
  typescript({
    tsconfig: "tsconfig.json",
    declaration: false,
    declarationDir: "dist",
    include: ["./src/**/*"],
  }),
];

plugins.push(terser());

/**
 * @type import("rollup").RollupOptions
 */
export default {
  external: [
    ...Object.keys(packageJson.dependencies).concat(
      Object.keys(packageJson.peerDependencies)
    ),
    "react/jsx-runtime",
  ],
  input: "./src/index.tsx",
  output: createOutput(),
  plugins,
  treeshake: true,
};
