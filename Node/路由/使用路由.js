//创建服务器
const express = require('express')
const app = express()
//请求路由
const router = require('./注册路由.js')

//声明jsonp接口
app.get('/jsonp', (req, res) => {
    const funname = req.query.callback
    const data = { name: '张三', age: 22 }
    const str = `${funname}(${JSON.stringify(data)})`
    res.send(str)
})

//导入cors 模块
const cors = require('cors')
app.use(cors())


//将表单数据解析出来 只针对urlencoded POST接口
app.use(express.urlencoded({ extended: false }))

//给服务器对象注册路由=>中间件
app.use(router)


//监听地址
app.listen(80, () => {
    console.log('http://127.0.0.1')
})