const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { config: common, dest } = require('./webpack.common');

const config = {
  plugins: [
    new CleanWebpackPlugin([ dest ]),
    new ManifestPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  output: {
    filename: '[name].[chunkhash:8].js'
  }
};

module.exports = merge(common, config);
