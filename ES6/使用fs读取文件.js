const fs = require('fs')
// fs.readFile('./诗.txt', (err, data) => {
//     if (err) console.log(err)
//     console.log(data.toString())
// })
//使用promise封装

const p = new Promise((resolve, reject) => {
    fs.readFile('./诗.txt', 'utf8', (err, data) => {
        if (err) reject('读取失败')
        resolve(data)
    })
})

p.then(value => {
    console.log(value)
}, resone =>
    console.log(resone))



























































