/**
 * @author liuyanhao
 * @date 2018-10-02
 * @Description:
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.js?/,
                use: 'babel-loader?cacheDirectory',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader',
                    ],
                }),
            },
            {
                test: /\.scss$/,
                exclude: path.resolve(__dirname, 'styles'),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?outputStyle=expanded'
                ]
            }, {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'styles'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]__[hash:base64:7]'
                        }
                    },
                    'sass-loader?outputStyle=expanded'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ],
            },
        ],
    },

    // 代码模块路径解析的配置
    resolve: {
        modules: [path.resolve(__dirname)],
        extensions: [".js"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 配置输出文件名和路径
            template: 'index.html', // 配置文件模板
        }),
        new webpack.HotModuleReplacementPlugin(), // 热替换插件
        new ExtractTextPlugin('[name].css'),
        new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
    ],
    devServer: {
        contentBase: path.resolve(__dirname),
        historyApiFallback: true,
        hot: true, // 激活服务器的HMR
    }
}
