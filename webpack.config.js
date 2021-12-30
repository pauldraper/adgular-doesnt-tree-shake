const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  entry: "./example.js",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  output: {
    filename: "webpack.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new DefinePlugin({ ngJitMode: "false", ngDevMode: "false" })],
};
