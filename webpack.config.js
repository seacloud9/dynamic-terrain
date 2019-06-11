const path = require("path");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './src/index.ts',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    mode: "development"
};