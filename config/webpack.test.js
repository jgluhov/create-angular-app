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
                    'awesome-typescript-loader'    
                ]           
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