const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const helpers = require('./helpers');

module.exports = webpackMerge(webpackCommon, {
  mode: 'development',

  devtool: 'inline-cheap-module-source-map',

  entry: {
    boot: './src/boot'
  },

  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'angular2-template-loader'
        ]
      },
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: helpers.root('docs'),
    port: 3000,
    historyApiFallback: true,
    stats: 'minimal',
    hot: true
  }
});
