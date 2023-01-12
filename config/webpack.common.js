const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false
        }),
        new ESLintPlugin({
            fix: true
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
        alias: {
            app: path.resolve(__dirname, '../src/app'),
            pages: path.resolve(__dirname, '../src/pages'),
            components: path.resolve(__dirname, '../src/components'),
            styles: path.resolve(__dirname, '../src/styles')
        }
    }
};
