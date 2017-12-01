import * as webpack from 'webpack';
import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import * as  CleanWebpackPlugin from 'clean-webpack-plugin';

const getDirectories = (source: string) =>
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

const config: webpack.Configuration = {
  entry: `./${src}/client.tsx`,
  output: {
    filename: 'bundle.js',
    path: join(__dirname, dest),
    publicPath: `/${dest}`
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    alias: {},
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [ '.ts', '.tsx', '.js', '.json' ]
  },

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
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([ dest ]),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ]

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // }
};

getDirectories(srcDir).forEach(file => {
  config.resolve.alias[file] = join(srcDir, file);
});

export default config;
