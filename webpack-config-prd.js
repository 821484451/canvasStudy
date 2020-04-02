const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name]-bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        port: 8090,
        hot: true
    },
    module: {
        rules: [
            {
                test: /.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test:  /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader",
                    'image-webpack-loader', //压缩图片  
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
        
    ]
}