//初始化
const express = require('express')
const app = express()
const joi = require('joi')
//解决跨域问题
const cors = require('cors')

app.use(cors())
//放到路由之前
app.use(express.urlencoded({ extended: false }))


//优化res.send()代码
app.use((req, res, next) => {
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

const config = require('./config')
const expressJWT = require('express-jwt')
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))

//给服务器挂载不同的路由
const userinfoRouter = require('./router/userinfo')
//以my开头的接口进行token身份认证
app.use('/my', userinfoRouter)

const artCateRouter = require('./router/artcate')
app.use('/my/article', artCateRouter)

const articleRouter = require('./router/article')
app.use('/my/article', articleRouter)
//导入路由
const userRouter = require('./router/user')
app.use('/api', userRouter)

//全局错误中间件  要在路由下面
app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) return res.cc(err)
    if (err.name === 'UnauthorizedError')
        return res.cc('身份认证失败')
    //未知错误
    res.cc(err)
})
app.use('/uploads', express.static('./uploads'))
app.listen(80, () => {
    console.log('http://127.0.0.1')
})

















