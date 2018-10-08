/**
 * @author liuyanhao
 * @date 2018-10-02
 * @Description:
 */

module.exports = function (env, argv) {
    return argv.mode === 'production' ?
        require('./config/webpack.prod.config.js') :
        require('./config/webpack.dev.config.js')
}
