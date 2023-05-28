//————————————表单的验证约束
//用户名和密码
const joi = require('joi')
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi
    .string()
    .pattern(/^[\S]{6,12}$/)
    .required()
//登录
exports.reg_login_schema = {
    body: {
        username,
        password,
    }
}
//修改昵称 电子邮件
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()
//更新信息
exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email,
    }
}
//修改密码
exports.update_password_schema = {
    body: {
        oldPwd: password,
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
}

//修改头像
//定义效验的规则
const avatar = joi.string().dataUri().required()
//共享解决方案 
exports.update_avatar_schema = {
    body: { avatar, id }
}






