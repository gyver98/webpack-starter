const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Two entry points here means that Webpack will start a bundle for the individual dependencies of both index.js and main.scss
  entry: ['./src/index.js', './src/scss/main.scss'],
  output: {
    path: path.resolve('dist'),
    // Put files in a 'distribution' folder
    publicPath: 'dist',
    // Output file name. Feel free to change this
    // [hash] adds a cache busting string to the file
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // Transpile the JS from ES6/7 down to machine optimised ES5
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        // Lint the JS with errors and warnings to the terminal
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          cache: true,
          fix: true,
        },
      },
      {
        // Move font files used the in the SASS into Dist
        test: /\.(ttf|eot|svg|woff2?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src',
            },
          },
        ],
      },
      {
        // Move image files used the in the code into Dist
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src',
            },
          },
        ],
      },
    ],
  },
  // Pull the CSS out to it's own file (main.css)
  // [hash] adds a cache busting string to the file
  plugins: [
    new ExtractTextPlugin('main.css'),
  ],
};
