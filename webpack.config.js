const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

const config = {
    mode: 'none',
    entry: {
        'holidays': './index.js',
        'holidays.min': './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: '[name].js',
        library: 'holidays'
    },

    plugins: [
        new MinifyPlugin({}, {
            include: /\.min\.js$/
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};

module.exports = config;