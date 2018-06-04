const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader','sass-loader'],
          fallback: 'vue-style-loader'
        })
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin('assets/styles.css')
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  }
}

module.exports = config
