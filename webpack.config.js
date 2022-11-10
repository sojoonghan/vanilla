const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")


module.exports = {
    mode: "development", //production | development |none
    entry: ["@babel/polyfill", './src/main.js'],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    },
    devServer: {
        port: 9999,
        compress: true,
        client: {
            overlay: {
                errors: true,
            },
        },
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    }
                },
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin(),
    ],
}
