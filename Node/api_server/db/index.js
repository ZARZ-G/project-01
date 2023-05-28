//导入数据库
const mysql = require('mysql')
//配置mysql对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: "my_db_01"
})

module.exports = db