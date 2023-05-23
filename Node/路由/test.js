const express = require('express')
const app = express()//创建快速服务器对象app
//引入路由
// const router = require('./router')
//将服务器与路由绑定一起
app.use('/api', require('./router'))//全局中间件
app.listen(80, () => {
    console.log('http://127.0.0.1')
})