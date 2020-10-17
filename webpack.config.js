const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = function () {
  const env = dotenv.config().parsed
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  console.warn('API: ', envKeys)

  return {
    entry: './src/index.js',
    node: {
      fs: 'empty' // workaround because of webpack dotenv fight - https://github.com/webpack-contrib/css-loader/issues/447
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          use: ['csv-loader'],
        },
        {
          test: /\.(png|jpg|pdf)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'public/'),
      port: 8000,
      publicPath: '/',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        template: './public/index.html',
      }),

      // below line does not work and i don't know exacly why
      // envKeys looks like this:
      // {
      //   'process.env.NODE_ENV': '"production"',
      //   'process.env.API': '"http://localhost:8001"' -> future address of BE which i want to change between dev and production builds
      // }
      new webpack.DefinePlugin(envKeys)
    ],
  }
}
