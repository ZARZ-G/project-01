//数据库的操作函数
const db = require('../db/index')
const bcrypt = require('bcryptjs')


//更新函数
exports.updateUserInfo = (req, res) => {
    const sql = 'update ev_users set ? where id=?'
    db.query(sql, [req.body, req.body.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1)
            return res.cc('修改用户基本信息失败')
        return res.cc('修改用户基本信息成功')
    })
    // res.send('ok')
}
//查找函数
exports.getUserInfo = (req, res) => {
    const sql = 'select id,username,nickname,email,user_pic from ev_users where id=?'
    db.query(sql, req.user.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('获取用户信息失败')
        res.send({
            status: 0,
            message: '获取用户信息成功',
            data: results[0]
        })
    })
    // res.send('ok')
}
//修改密码函数
exports.updatePassword = (req, res) => {
    //id查找用户
    const sql = 'select *from ev_users where id=?'
    db.query(sql, req.user.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('用户不存在')
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!compareResult) return res.cc('旧密码错误')
        //更细数据库密码
        const sql = 'update ev_users set password=? where id=?'
        //对新密码进行加密处理
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
        db.query(sql, [newPwd, req.user.id], (err, results) => {
            if (err) return res.send(err)
            if (results.affectedRows !== 1) return res.cc('更新密码失败')
            res.cc('更新密码成功', 0)
        })
        // res.cc('ok')
    })

}

//更改头像的函数
exports.updateAvatar = (req, res) => {
    // 定义更新用户头像的 SQL 语句
    const sql = 'update ev_users set user_pic=? where id=?'
    db.query(sql, [req.body.avatar, req.body.id], (err, results) => {
        //如果数据库语句错误就打印错误信息
        if (err) return res.cc(err)
        //如果受影响的行不是1行就打印没有找到该行
        if (results.affectedRows !== 1) return res.cc('没有找到该行')
        console.log(req)
        // 检验成功就打印成功后的状态信息
        return res.cc('更新头像成功', 0)
    })
}
