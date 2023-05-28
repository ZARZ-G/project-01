const express = require('express')
const router = express.Router()
//导入路由处理函数模块
const userinfo_handler = require('../router_handler/userinfo')
const expressjoi = require('@escook/express-joi')
const { update_userinfo_schema, update_password_schema } = require('../schema/user')
const { update_avatar_schema } = require('../schema/user')
//获取用户基本信息
router.get('/userinfo', userinfo_handler.getUserInfo)

//更新用户信息
router.post('/userinfo', expressjoi(update_userinfo_schema), userinfo_handler.updateUserInfo)

//修改密码
router.post('/updatepwd', expressjoi(update_password_schema), userinfo_handler.updatePassword)


//更新用户头像 
//每次向服务器发送请求时都会先效验一下参数然后再执行后面的代码
router.post('/update/avatar', expressjoi(update_avatar_schema), userinfo_handler.updateAvatar)

module.exports = router
