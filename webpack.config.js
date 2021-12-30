const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./example.js",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({extractComments: false})
    ],
  },
  output: {
    filename: "webpack.bundle.js",
    path: path.resolve(__dirname, "dist"),
  }
};
