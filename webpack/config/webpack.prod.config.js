/**
 * @author liuyanhao
 * @date 2018-10-02
 * @Description:
 */

const merge = require('webpack-merge');
const path = require('path')
const baseConfig = require('./webpack.base.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanPlugin = require('clean-webpack-plugin');

const config = merge.smart(baseConfig, {
    devtool: 'cheap-source-map',
});

const dist = path.resolve(__dirname, "../dist");
config.plugins.push(new CleanPlugin(dist.split('\\').pop(), {root: path.resolve(dist, '../')}));
config.plugins.push(new BundleAnalyzerPlugin({analyzerPort: 8887}));

module.exports = config;
