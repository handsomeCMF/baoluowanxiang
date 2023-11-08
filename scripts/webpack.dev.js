const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 6060,
    open: true, // 是否自动打开浏览器
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.less$/,
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         {
  //           loader: 'postcss-loader',
  //           options: {
  //             postcssOptions: {
  //               plugins: [['postcss-preset-env', {}]]
  //             },
  //           },
  //         },
  //         'less-loader',
  //       ],
  //       exclude: /node-modules/,
  //     }
  //   ]
  // }
})