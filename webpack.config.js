const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [ new HtmlWebpackPlugin() ],
  devServer: {
    static: false,
    compress: true,
    port: 8080,
    open: true
  }
}