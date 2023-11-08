const base = require('./webpack.base.js');
const TerserPlugin = require("terser-webpack-plugin");
const minCssExtractPlugin = require('mini-css-extract-plugin');
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin');
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
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          minCssExtractPlugin.loader, 
          // 'style-loader', 这个是css直接嵌入到js文件中， 而minCssExtractPlugin是独立生成css文件
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]]
              },
            },
          },
          'less-loader',
        ],
        exclude: /node-modules/,
      },
    ]
  },
  plugins: [
    // webpack已经弃用Uglify了 改用 terser-webpack-plugin
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false }
    // }),
    new minCssExtractPlugin({ filename: 'assets/css/[hash:8].css' })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new cssMinimizerPlugin()],
    splitChunks: {
      // code splitting -- https://webpack.js.org/guides/code-splitting/
      chunks: 'all',
    }
  }
})