import nodeResolve from '@rollup/plugin-node-resolve';
import { uglify } from "rollup-plugin-uglify";

export default {
  input: 'example.js',
  output: {
    file: 'dist/rollup-uglify.bundle.js',
    format: 'cjs',
  },
  plugins: [nodeResolve(), uglify()],
};
