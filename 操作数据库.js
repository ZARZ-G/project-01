//引入数据库的模块
const mysql = require('mysql')
//配置mysql
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

// //测试是否配置成功
// db.query('select 1', (err, res) => {
//     if (err) return console.log(err.message)
//     console.log(res)
// })


//查找数据
//const sqlstr = 'select*from stu_info where 名次>2'
// db.query(sqlstr, (err, results) => {
//     if (err) return console.log(err.message)
//     console.log(results)
// })

//插入数据
// const user = { 姓名: '王大宝', 性别: '男', 出生年月: '1999-2-2', 政治面貌: '团员', 籍贯: '武汉', 入学成绩: 200, 平均成绩: 230, 名次: 5 }
// const sqlstr = 'insert into stu_info(姓名,性别,出生年月,政治面貌,籍贯,入学成绩,平均成绩,名次) values(?,?,?,?,?,?,?,?)'
// db.query(sqlstr, [user.姓名, user.性别, user.出生年月, user.政治面貌, user.籍贯, user.入学成绩, user.平均成绩, user.名次], (err, res) => {
//     if (err) return console.log(err.message)
//     if (res.affectedRows === 1) { console.log('插入成功') }
// })



// //便捷方法
// const user = { 姓名: '王菲菲', 性别: '男', 出生年月: '1999-2-2', 政治面貌: '团员', 籍贯: '武汉', 入学成绩: 200, 平均成绩: 230, 名次: 5 }
// const sqlstr = 'insert into stu_info set ?'//重点
// db.query(sqlstr, user, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) { console.log('插入成功') }

// })

//TODO:更新收据
// const user = { 姓名: '李小龙', 政治面貌: '团员', 编号: 11, }
// const sqlstr = 'update stu_info set ? where 编号=?'
// db.query(sqlstr, [user, user.编号], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) { console.log('更新成功') }
// })


//TODO:删除数据

// const sqlstr = 'delete from stu_info where 编号=1'
// db.query(sqlstr, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) { console.log('删除成功') }
// })


// TODO:标记删除
const sqlstr = 'update stu_info set ? where 编号=?'
const user = { status: 1, 编号: 8 }
db.query(sqlstr, [user, user.编号], (err, status) => {
    if (err) return console.log(err.message)
    if (status.affectedRows === 1) { console.log('标记删除成功') }
})


