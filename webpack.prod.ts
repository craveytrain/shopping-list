import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as ManifestPlugin from 'webpack-manifest-plugin';
// tslint:disable-next-line no-var-requires
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

import common, { dest } from './webpack.common';

const config: webpack.Configuration = {
  plugins: [
    new CleanWebpackPlugin([ dest ]),
    new ManifestPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
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

export default merge(common, config);
