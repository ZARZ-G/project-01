//导入webpack-plugin 得到构造函数
const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')
const htmlplugin = new HtmlPlugin({
    //指定复制的页面
    template: './src/index.html',
    //复制过来的页面的存放路径
    filename: './index.html'
})

//引入自动删除dist文件夹的构造函数
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//配置webpack的构建模式
module.exports = {
    //让错误的位置和源码保持一致
    // devtool: 'eval-source-map',
    //不暴露源代码
    devtool: 'nosources-source-map',
    //使用开发模式
    mode: 'development',
    //使用插件让配置的内容生效
    plugins: [htmlplugin, new CleanWebpackPlugin()],
    //自动打开页面
    devServer: {
        open: true,
        port: 80,
        host: '127.0.0.1'
    },

    //让webpack能识别css less 图片 复杂语法
    //loader 加载器
    module: {
        rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
        { test: /\.jpg|png|gif$/, use: ['url-loader?limit=200&outputPath=images'] },
        //在配置时排除不需要的模块
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    }


}

















