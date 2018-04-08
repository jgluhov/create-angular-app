const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']    
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader'    
                ]           
            }           
        ]
    },

    output: {
        path: helpers.root('docs')
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
        new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)esm5/, 
            helpers.root('src')
        ),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true
            }
        })
    ]
}