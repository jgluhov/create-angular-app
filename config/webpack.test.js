const webpackMerge = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const path = require('path');

module.exports = webpackMerge(webpackCommon, {    
    entry: null,

    mode: 'development'
});