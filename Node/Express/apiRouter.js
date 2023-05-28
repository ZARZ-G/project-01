const express = require('express')
//创建路由
const Router = express.Router()


//创建get接口
Router.get('/get', (req, res) => {
    //获取查询字符串的内容
    const query = req.query
    res.send({
        status: 0,
        msg: '请求成功',
        data: query,
    })
})

//创建post 请求
Router.post('/post', (req, res) => {
    //获取用户发送到服务器的数据
    const body = req.body
    res.send({
        status: 0,
        msg: "请求成功",
        data: body
    })
})











//导出路由
module.exports = Router