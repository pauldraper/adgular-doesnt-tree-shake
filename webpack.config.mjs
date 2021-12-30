import * as path from "path";
import * as url from "url";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
import linkerPlugin from '@angular/compiler-cli/linker/babel';

export default {
  entry: "./example.js",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  output: {
    filename: "webpack.bundle.js",
    path: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "dist"),
  },
  module: {
    rules: [
      {
        test: /\.[cm]?js$/,
        use: {
          loader: 'babel-loader',
          options: { plugins: [linkerPlugin] },
        },
      },
    ],
  },
  plugins: [new webpack.DefinePlugin({ ngJitMode: "false", ngDevMode: "false" })],
};
