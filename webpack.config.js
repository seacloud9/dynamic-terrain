const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    
    output: {
        filename: './index.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }, {
            test: /\index.ts\.ts$/,
            use: [ 'imports-loader?BABYLON=>require("babylonjs")' ]
        }]
    },
    mode: "development",
    plugins: [
        new webpack.ProvidePlugin({
          'BABYLON': 'babylonjs'
        })
    ]
};