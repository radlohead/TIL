const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        folderA: ['babel-polyfill', './folderA/js/index.js'],
        folderB: ['babel-polyfill', './folderB/js/index.js'],
    },
    output: {
        filename: './[name]/index.[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'eval-source-map',
    devServer: {
        host: '192.168.0.2',
        port: '8080',
        open: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
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
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './[name]/css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new HtmlWebPackPlugin({
            chunks: ['folderA'],
            template: './folderA/index.html',
            filename: './folderA/index.html',
        }),
        new HtmlWebPackPlugin({
            chunks: ['folderB'],
            template: './folderB/index.html',
            filename: './folderB/index.html',
        }),
        new MinifyPlugin(),
    ],
}
