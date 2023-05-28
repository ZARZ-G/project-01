//使用Express创建web服务器
const express = require('express')
const app = express()

app.listen(80, () => {
    console.log('http://127.0.0.1')
})


//express的get和post请求
app.get('/user/:id/:name', (req, res) => {
    res.send({ name: 'zs', age: 20, gender: '男', aihao: '玩电脑' })
    console.log(req.params)
})

app.post('/user', (req, res) => {
    res.send('<h1>请求成功</h1>')
})

//使用Express创建静态资源
//ctrl+s nodemon就会重新运行服务器
//express.static() 中间件可以访问到文件夹里的静态资源
app.use('/clock', express.static('./clock'))

