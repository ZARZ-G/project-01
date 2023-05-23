const express = require('express')
const app = express()
const router = express.Router()

app.get('/', (req, res) => {
    throw new Error('服务器发生了错误')
    res.send('这是get请求的方法')
})


app.post('/', (req, res) => {
    throw new Error('服务器发生了错误')
    res.send('这是post请求')
})


//错误处理函数放到路由之后
app.use((err, req, res, next) => {
    // console.log('发生了错误' + err.message)
    res.send(err.message)
})

//监听放到最后面
app.listen(80, () => {
    console.log('http://127.0.0.1')
})
