const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const getDirectories = source => readdirSync(source).filter(name => lstatSync(join(source, name)).isDirectory());

const config = {
  entry: './src/client.tsx',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/static`
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    alias: {},
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  }

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // }
};
const srcDir = join(__dirname, 'src');
getDirectories(srcDir).forEach(file => {
  config.resolve.alias[file] = join(srcDir, file);
});

module.exports = config;
