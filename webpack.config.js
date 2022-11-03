const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');


module.exports = {
    mode: "development", //production | development |none
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    },
    devServer: {
        hot: true,
        port: 5000,
        compress: true,
        client: {
            overlay: {
                errors: true,
            },
        },
        open: true,
        // constentBase: path.resolve(__dirname, "public")

    },
    // exclude: /node_modules/,
    // query: {
    //     cacheDirectory: true,
    //     presets: ["es2021", "react"],
    // },

    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin(),
    ],
}
