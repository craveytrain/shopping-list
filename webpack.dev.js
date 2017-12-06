const webpack = require('webpack');
const merge = require('webpack-merge');
const { config: common } = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const fileNamePattern = '[name]';

const config = {
  entry: [
    'webpack-hot-middleware/client'
  ],

  plugins: [
    new ExtractTextPlugin(`${fileNamePattern}.css`),
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    filename: `${fileNamePattern}.js`
  }
};

module.exports = merge(common, config);
