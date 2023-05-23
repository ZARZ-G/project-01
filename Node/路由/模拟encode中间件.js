//创建服务器
const express = require('express')
const app = express()
const cors = require('cors')
// const qs = require('querystring')

//定义中间件
// app.use(
//     (req, res, next) => {
//         let str = ''
//         req.on('data', (joint) => {
//             str += joint
//         })
//         req.on('end', () => {
//             console.log(str)
//             //将转义好的字符解析出来
//             const newStr = qs.parse(str)
//             console.log(newStr)
//             next()
//         })

//     })


app.use(cors())

//TODO:导入自定义的模块

const getDate = require('./封装中间件')
app.use(getDate)



app.get('/', (req, res) => {
    res.send(req.body)
})
app.post('/', (req, res) => {
    res.send(req.body)
})



app.listen(80, () => {
    console.log('http://127.0.0.1')
})