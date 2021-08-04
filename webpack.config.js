const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/build')
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
};
