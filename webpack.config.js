const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        polyfills: './src/polyfills.ts',
        app: './src/boot.aot.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']    
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js'
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
                loaders: [
                  'angular-router-loader?aot=true'
                ]
            }              
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)esm5/, 
            path.resolve(__dirname, 'src')
        ),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true
            }
        })
    ],

    devServer: {
        contentBase: path.resolve('build'),
        port: 3000,
        historyApiFallback: true,
        stats: 'minimal',
    }
}