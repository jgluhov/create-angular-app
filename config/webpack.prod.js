const webpackMerge = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = webpackMerge(webpackCommon, {
    mode: 'production',
    
    entry: {
        boot: './src/boot.aot.ts'
    },

    output: {
        filename: 'js/[name].[hash:8].bundle.js',
        chunkFilename: 'js/[id].[hash:8].chunk.js'
    },

    module: {
        rules: [
            {                
                test: /\.(ts|js)$/,
                loader: 'angular-router-loader',                
                options: {
                    aot: true
                }
            }              
        ]
    },

    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ]
});
