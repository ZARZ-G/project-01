const express = require('express')
const app = express()
const router = express.Router()

//todo:定义局部中间件
const wv = function (req, res, next) {
    console.log('我是局部的中间件1')
    next()
}
//todo:定义第二个中间件

const wv2 = function (req, res, next) {
    console.log('我是局部的中间件2')
    next()
}



app.get('/', wv, (req, res) => {
    res.send('我是get请求的')
})



app.post('/', wv, wv2, (req, res) => {
    res.send('我是post请求的')
})








app.listen(80, () => {
    console.log('http://127.0.0.1')
})