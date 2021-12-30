import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";
import linkerPlugin from '@angular/compiler-cli/linker/babel';

export default {
  input: "example.js",
  output: {
    file: "dist/rollup-terser.bundle.js",
    format: "cjs",
  },
  plugins: [
    nodeResolve(),
    babel({ plugins: [linkerPlugin] }),
    replace({ ngDevMode: "false", ngJitMode: "false" }),
    terser(),
  ],
};
