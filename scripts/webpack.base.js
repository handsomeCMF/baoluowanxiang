const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'baoluowanxiang-webpack.bundle.js'
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      // 'store': path.require(__dirname, 'src/store/'),
      // 'utils': path.require(__dirname, 'src/utils/')
    },
  },
  module: {
    rules: [
      {
        test: /.(jsx?)|(tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'iOS 9, Android 4.4, last 2 versions, > 0.2%, not dead', // 根据项目去配置
                  useBuiltIns: 'usage', // 会根据配置的目标环境找出需要的polyfill进行部分引入
                  corejs: 3, // 使用 core-js@3 版本
                },
              ],
              ['@babel/preset-typescript'],
              ['@babel/preset-react'],
            ]
          }
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
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
      {
        test: /\.(jpg|png|jpe?g|gif|svg|webp)$/i,
        use: [
          // 'file-loader',
          {
            loader: 'url-loader',
            options: {
              limit: 2000 * 1024 //单位是bytes
            },
          }
        ],
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
  ],
  stats: 'errors-warnings',
}