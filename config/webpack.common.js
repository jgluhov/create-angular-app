const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV || process.env.ENV || 'development';

module.exports = {
  entry: {
    polyfills: './src/polyfills'
  },

  output: {
    path: helpers.root('docs')
  },

  resolve: {
    extensions: ['.ts', '.js', '.css']
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
        test: /\.(ts|js)$/,
        loader: 'angular-router-loader',
        options: {
          aot: ENV === 'production'
        }
      },
      {
        test: /\.css$/,
        include: [
          helpers.root('src', 'styles')
        ],
        use: [
          'style-loader',
          'css-loader'
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

  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](?!(core-js|zone\.js))/,
          chunks: 'initial',
          filename: 'js/[name].bundle.js',
          name: 'vendor',
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: ENV === 'production'
      }
    }),
    new webpack.ContextReplacementPlugin(
      /@angular(\\|\/)core(\\|\/)esm5/,
      helpers.root('src')
    ),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    })
  ]
};
