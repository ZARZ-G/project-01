//写入文件内容
const fs = require('fs')
//err如果是null就说明写入成功 否则失败
fs.writeFile('./考试成绩处理.txt', '小红=99 小兰=100 小张=60 小美=88', err => {
    if (err) { return console.log('写入失败') }
    console.log('写入成功')
})