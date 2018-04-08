const webpackMerge = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const helpers = require('./helpers')

module.exports = webpackMerge(webpackCommon, {
    mode: 'development',

    entry: {
        boot: './src/boot.ts'
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
                    'angular-router-loader'
                ]                
            }
        ]
    },

    devServer: {
        contentBase: helpers.root('docs'),
        port: 3000,
        historyApiFallback: true,
        stats: 'minimal',
    }
});