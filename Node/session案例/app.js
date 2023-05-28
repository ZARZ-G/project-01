// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO：使用 Session 中间件
//导入session模块
const session = require('express-session')
app.use(session({
  secret: 'itheima',
  resabe: false,
  saveUninitialized: true
}))
// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据  定义解析的中间键
app.use(express.urlencoded({ extended: false }))

// 登录的 API 接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }
  //将用户输入的内容保存到session里
  req.session.user = req.body
  req.session.islogin = true
  res.send({ status: 0, msg: '登录成功' })
})

// 从session中取数据
app.get('/api/username', (req, res) => {
  // TODO:从session中将用户名取出 验证用户身份信息
  //判断是否登录
  if (!req.session.islogin) return res.send({ status: 1, msg: '用户没有登录' })
  res.send({ status: 0, msg: '登录成功', username: req.session.user.username })

})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // TODO_04：清空 Session 信息
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录成功'
  })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1:80')
})
