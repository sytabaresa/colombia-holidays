const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

const config = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'holidays.js',
        library: 'holidays'

    },

    plugins: [
        new MinifyPlugin({}, {})
    ]
};

module.exports = config;