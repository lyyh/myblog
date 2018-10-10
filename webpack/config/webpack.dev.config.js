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
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname,'..'),
        historyApiFallback: true,
        port: 3001,
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
        'SERVICE_URL': JSON.stringify('http://dev.example.com') // 开发环境下的服务器URL
    })
)

module.exports = config