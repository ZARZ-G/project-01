const fs = require('fs')
fs.readFile('./考试成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) return console.log('读取失败')
    const strArr = dataStr.split(' ')
    // console.log(strArr)
    const newarr = strArr.map(item => item.replace('=', ':')).join('\r\n')
    //将处理好的数据写入到新的文件里
    fs.writeFile('考试成绩-ok.txt', newarr, function (err) {
        if (err) return console.log('写入失败')
        console.log('写入成功')
    })
})