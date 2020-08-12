const {webpack}              = require('webpack');
const VueLoaderPlugin        = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path                   = require('path');
module.exports = {
    entry: {
        app: ['@babel/polyfill', './src/main.js'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: false
                  }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    },
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                    sourceMap: true,
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                    sourceMap: true,
                    },
                },
                ],
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000,
                        esModule: false
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
           template: './public/index.html'
        }) ,

    ]
};