const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js']    
    },

    output: {
        path: helpers.root('docs')
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
}