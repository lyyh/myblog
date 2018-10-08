/**
 * @author liuyanhao
 * @date 2018-10-02
 * @Description:
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const config = merge.smart(baseConfig, {
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        'less-loader',
                    ],
                }),
            },
        ],
    }
})

config.plugins.push(new ExtractTextPlugin('[name].css'))

module.exports = config
