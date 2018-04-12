const webpackMerge = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = webpackMerge(webpackCommon, {
  mode: 'production',

  devtool: 'source-map',

  entry: {
    boot: './src/boot.aot'
  },

  output: {
    filename: 'js/[name].[hash:8].bundle.js',
    chunkFilename: 'js/[id].[hash:8].chunk.js'
  },

  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static' })
  ]
});
