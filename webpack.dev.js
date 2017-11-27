const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new DashboardPlugin(),
  ],
  module: {
    rules: [
      {
        // Transpile our styles and using the ExtractTextPlugin, pull the CSS out to it's own file (main.css in webpack.common)
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
    ],
  },
});
