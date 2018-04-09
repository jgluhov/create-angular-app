const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base');
const helpers = require('./helpers');

module.exports = webpackMerge(webpackBase, {
    entry: {
        polyfills: './src/polyfills.ts'
    },

    optimization: {
        minimize: true,     
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
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
                collapseWhitespace: true
            }
        })
    ]
});