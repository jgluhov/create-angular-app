const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = {
    mode: 'development',

    resolve: {
        extensions: ['.ts', '.js', '.scss']
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
                test: /\.scss$/,
                loaders: [
                    'raw-loader',
                    'css-loader',
                    'sass-loader'
                ],
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
