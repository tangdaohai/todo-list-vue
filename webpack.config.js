/**
 * Created by Jerry on 16/12/27.
 */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    // eval-source-map is faster for development
    devtool: '#eval-source-map',
    
    entry: {
        app: [
            "webpack-hot-middleware/client?noInfo=true&reload=true",
            "./src/index.js"
        ]
    },
    output: {
        filename: "js/[name].js",
        chunkFilename: "js/[id].js",
        path: "/",
        publicPath: "/"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': '"development"'
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders:  [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    }
};