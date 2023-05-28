const mysql = require('mysql')
//创建mysql的池
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'

})

//测试链接情况
// db.query('select 1', (err, results) => {
//     if (err) return console.log(err.message)
//     console.log(results)
// })
//查询学生信息表
// const sqlstr = 'select*from stu_info'
// db.query(sqlstr, (err, results) => {
//     if (err) return console.log(err.message)
//     results.forEach(item => {
//         console.log(JSON.stringify(item))
//         // console.log(item.姓名)
//     })
// })


// 增加新数据
const sqlstr = 'insert into stu_info set ?'
const user = { 姓名: '李白', 性别: '男', 籍贯: '中国' }
db.query(sqlstr, user, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) console.log('添加成功')
})

//TODO:条件需要自己指定
//修改数据
// const sqlstr = 'update stu_info set ? where 编号=?'
// const user = { 姓名: '王者', 编号: 19 }
// db.query(sqlstr, [user, user.编号], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) console.log('修改成功')
// })

//删除数据

// const sqlstr = 'delete from stu_info where 编号=21'
// db.query(sqlstr, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) console.log('删除成功')
// })


//标记删除

// const sqlstr = 'update stu_info set status=1 where 编号=23'
// db.query(sqlstr, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) console.log('标记删除成功')
// })