const webpack = require('webpack');
const merge = require('webpack-merge');
const { config: common } = require('./webpack.common');

const config = {
  entry: [
    'webpack-hot-middleware/client'
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    filename: '[name].js'
  }
};

module.exports = merge(common, config);
