const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new UnusedFilesWebpackPlugin({
            patterns: ['./src/**/*.jsx', './src/**/*.js'],
        }),
        new Dotenv({
            systemvars: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Calculator',
            template: './public/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            react$: path.resolve(__dirname, path.join('./node_modules', 'react')),
            'react-dom': path.resolve(__dirname, path.join('./node_modules', 'react-dom')),
        },
    },
};
