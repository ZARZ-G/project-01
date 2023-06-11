const fs = require('fs')
// fs.readFile('./内容.txt', 'utf-8', (err, data) => {
//     if (err) return console.log('读取失败')
//     console.log(data)
// })



const pm = new Promise((resolve, reject) => {
    fs.readFile('./内容.txt', 'utf-8', (err, data) => {
        if (err) return reject(err)
        resolve(data)
    })
})


//参数一 成功
//参数二 失败
pm.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err + '读取文件失败')
})
















