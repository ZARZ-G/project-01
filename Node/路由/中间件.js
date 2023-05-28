const express = require('express')
const app = express()
app.use((req, res, next) => {
    //获取当前的时间
    req.startTime = Date.now()
    console.log('我是第一个中间件')
    next()//关键点
})


app.use((req, res, next) => {
    console.log('我是第二个中间件')
    next()//关键点
})

app.use((req, res, next) => {
    console.log('我是第三个中间件')
    next()//关键点
})




app.get('/', (req, res) => {
    res.send('我是get请求' + "当前时间" + req.startTime)
})


app.post('/', (req, res) => {
    res.send('我是post请求' + "当前时间" + req.startTime)
})


app.listen(80, () => {
    console.log('http://127.0.0.1')
})