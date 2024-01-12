const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 6060,
    open: true, // 是否自动打开浏览器
    proxy: [{
      context: ['/Mihayou'],
      target: 'http://localhost:6061',
      changeOrigin: true,
    }],
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