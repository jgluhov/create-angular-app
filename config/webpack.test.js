const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = {
  mode: 'development',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader?keepPath=true'
        ]
      },
      {
        test: /\.css$/,
        loader: 'raw-loader',
        exclude: [
          helpers.root('src', 'styles')
        ]
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /@angular(\\|\/)core(\\|\/)esm5/,
      helpers.root('src')
    )
  ]
};
