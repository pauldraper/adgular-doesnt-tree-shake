import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'example.js',
  output: {
    file: 'dist/rollup-terser.bundle.js',
    format: 'cjs',
  },
  plugins: [nodeResolve(), terser()],
};
