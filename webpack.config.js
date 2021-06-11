const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name][contenthash].js',
        path: __dirname + '/dist',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: __dirname + '/dist',
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpeg|gif|svg|ttf)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: __dirname + '/dist/img'
                    }
                }],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name][contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/templates/main.ejs'
        }),
        new CopyPlugin({
            patterns: [
                { from: __dirname + '/src/img/', to: __dirname + '/dist/img/'}
            ]
        }),
    ],
    devServer: {
        contentBase: [
            __dirname + '/dist'
        ],
        historyApiFallback: true,
        hot: true,
        port: 9000,
    },
};

module.exports = config;