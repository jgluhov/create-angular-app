const webpack = require('webpack');
const aliases = require('./aliases');
const helpers = require('./helpers');

module.exports = {
  mode: 'development',

  resolve: {
    extensions: ['.ts', '.js'],
    alias: aliases
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.css$/,
        loader: 'null-loader'
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
      helpers.root('src')
    )
  ]
};
