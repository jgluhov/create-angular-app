const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base');

module.exports = webpackMerge(webpackBase, {
    mode: 'development'
});