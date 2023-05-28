// 导入fs模块的方法
//读取文件内容
const path = require('path')
const fs = require('fs')
fs.readFile(path.join(__dirname, './content/考试成绩.txt'), 'utf-8', function (err, dataStr) {
    if (err) return console.log('文件读取失败' + err.message)
    console.log('文件读取成功内容是：' + dataStr)
    console.log(path.basename(path.join(__dirname, './content/考试成绩.txt'), '.txt'))
    console.log(path.extname(path.join(__dirname, './content/考试成绩.txt')))
})
