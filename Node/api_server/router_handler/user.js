//导入数据库
const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')
//共享函数


//组测函数
exports.regUser = (req, res) => {
    //获取用户提交的信息
    const userinfo = req.body
    // if (!userinfo.username || !userinfo.password) {
    //     return res.send({
    //         status: 1,
    //         message: '用户名或密码不能为空'
    //     })
    // }
    //判断用户名是否存在
    const sqlstr = 'select *from ev_users where username=?'
    db.query(sqlstr, userinfo.username, (err, results) => {
        if (err) return res.send({ status: 1, message: err.message })
        //用户名字占用
        if (results.length > 0) {
            return res.send({
                status: 1,
                message: '用户名字被占用,请更换'
            })
        }
        //加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        // console.log(req.body)
        //插入新用户
        const sql = 'insert into  ev_users set ?'
        db.query(sql, { username: userinfo.username, password: userinfo.password }, function (err, results) {
            if (err) return res.send({ status: 1, message: err.message })
            if (results.affectedRows !== 1) {
                return res.send({ status: 1, message: '注册用户失败，请稍后再试' })
            }
            //注册成功
            res.send({ status: 0, message: '注册成功' })
        })
    })
}


//登录函数
exports.login = (req, res) => {
    //获取用户的信息
    const userinfo = req.body
    //条件判断
    const sql = 'select *from ev_users where username=?'
    db.query(sql, userinfo.username, function (err, results) {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('登录失败')
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResult) { return res.cc('登录失败') }

        const user = { ...results[0], password: '', user_pic: '' }//踢出密码和头像
        //对用户信息进行加密
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: '10h' })

        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr
        })
        // res.send('登录成功')
    })
}
















