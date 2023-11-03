const base = require('./webpack.base.js');
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(base, {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../index.tsx'),
    another: path.resolve(__dirname, '../another-module.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    // webpack已经弃用Uglify了 改用 terser-webpack-plugin
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false }
    // }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      // code splitting -- https://webpack.js.org/guides/code-splitting/
      chunks: 'all',
    }
  }
})