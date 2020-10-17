const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = env => {
  // console.warn('API: ', env.api)

  return {
    entry: './src/index.js',
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

      // #TODO - passing env.api from here to bundle so it can i.e. send different api calls
      // depends on dev/prod mode (I couldn't do it with official docs)
      // new webpack.EnvironmentPlugin({
      //   NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      //   DEBUG: false,
      //   API: env.api
      // })
    ],
  }
}
