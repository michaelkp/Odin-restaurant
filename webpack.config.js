const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
        home: './src/home.js',
        about: './src/about.js',
        menu: './src/menu.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Odin Coffee'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}