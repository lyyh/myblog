/**
 * @author liuyanhao
 * @date 2018-10-02
 * @Description:
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].[chunkhash:7].sass.css',
    disable: process.env.NODE_ENV === 'development' ? true : false,
});
const extractLess = new ExtractTextPlugin({
    filename: '[name].[chunkhash:7].less.css',
    disable: process.env.NODE_ENV === 'development' ? true : false,
});

module.exports = {
    entry: {
        app: './index.js',
        vendor: ['react', 'react-dom'],
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel-loader?cacheDirectory',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
                use: extractLess.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader',
                    ],
                }),
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, '../components/global'),
                    path.resolve(__dirname, '../components/no-modules')],
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            },
                        },
                        'sass-loader',
                    ],
                }),
            }, {
                test: /\.scss$/,
                exclude: [
                    path.resolve(__dirname, '../components/global'),
                    path.resolve(__dirname, '../components/no-modules')],
                include: path.resolve(__dirname, '../components'),
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            },
                        },
                        'sass-loader',
                    ],
                }),
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ],
    },

    // 代码模块路径解析的配置
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 配置输出文件名和路径
            template: 'index.html', // 配置文件模板
        }),
        extractSass,
    ],
};
