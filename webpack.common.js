const webpack = require('webpack');
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const getDirectories = (source) =>
  readdirSync(source)
    .filter(
      name => lstatSync(
        join(source, name)
      ).isDirectory()
    )
;

const dest = 'static';
const src = 'src';
const srcDir = join(__dirname, src);

const config = {
  entry: [
    `./${src}/client.tsx`,
    `./${src}/css/main.css`
  ],

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    alias: {},
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [ '.ts', '.tsx', '.js', '.json' ]
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
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
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

getDirectories(srcDir).forEach(file => {
  config.resolve.alias[file] = join(srcDir, file);
});

module.exports = {
  config,
  dest,
  src,
  srcDir
};
