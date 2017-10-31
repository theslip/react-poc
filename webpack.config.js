const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const loaders = require('./webpack/loaders')

module.exports = {
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.join(__dirname, './index.js')
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('site.css')
  ],
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    publicPath: '/',
    port: 3501,
    historyApiFallback: true,
    hot: true,
    compress: true
  },
  module: {
    loaders
  }
}
