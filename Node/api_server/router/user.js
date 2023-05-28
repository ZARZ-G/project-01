const express = require('express')
const router = express.Router()
const userHandler = require('../router_handler/user')
//导入验证表单的中间件
const expressJoi = require('@escook/express-joi')
//导入需要验证的对象
const { reg_login_schema } = require('../schema/user')


//注册用户
router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)
//登录
router.get('/login', expressJoi(reg_login_schema), userHandler.login)

module.exports = router