import * as webpack from 'webpack';
import * as merge from 'webpack-merge';

import common from './webpack.common';

const config: webpack.Configuration = {
  entry: [
    'webpack-hot-middleware/client'
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    filename: '[name].js'
  },
};

export default merge(common, config);
