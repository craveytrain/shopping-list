const webpack = require('webpack');
const { join } = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dest = 'static';

const config = {
  entry: [
    'client.jsx',
    'css/main.css',
    'material-components-web/dist/material-components-web.css'
  ],

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    modules: [ 'src', 'node_modules' ],
    extensions: [ '.js', '.jsx' ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader'
          ]
        })
      }
    ]
  },

  output: {
    path: join(__dirname, dest),
    publicPath: `/${dest}`
  }
};

module.exports = {
  config,
  dest
};
