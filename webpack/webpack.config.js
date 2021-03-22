const { resolve } = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { aliases } = require('./aliases')

module.exports = {
  context: resolve(__dirname, '../src'),
  entry: {
    main: './index.tsx'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx', '.json' ],
    alias: aliases
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '../dist'),
  },
  devServer: {
    https: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: './index.html'
    })
]
}