const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
//配置post请求的中间件 必须放到路由之前
app.use(express.urlencoded({ extended: false }))


//导入路由
const Router = require('./apiRouter')
//TODO: 让服务器使用路由
app.use('/router', Router)




app.listen(80, () => {
    console.log("服务器的访问地址是http://127.0.0.1/router/")
})
