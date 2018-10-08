/**
 * @author liuyanhao
 * @date 2018-10-02
 * @Description:
 */

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const config = merge.smart(baseConfig, {
    module: {
        rules:[
            {
                test: /\.scss$/,
                exclude: path.resolve(__dirname, 'components/global'),
                include: path.resolve(__dirname,'components'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'components/global'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    'sass-loader'
                ]
            },
            /*{
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["eslint-loader"],
            },*/
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        historyApiFallback: true,
        port: 3000,
        before(app) { // 假数据测试
            app.get('/api/test.json', function (req, res) {
                res.json({code: 200, message: 'hello world'})
            })
        },
    },
})

config.plugins.push(
    new webpack.DefinePlugin({
        __DEV__: JSON.stringify(true),
    })
)

module.exports = config
