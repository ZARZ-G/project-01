//先执行babel的插件 再执行babel-loader 加载器
module.exports = {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}







































