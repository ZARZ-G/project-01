
const fs = require('fs')
const p = new Promise((resolve, reject) => {
    fs.readFile('./诗.txt', 'utf8', (err, data) => {
        if (err) reject('读取失败了')
        resolve(data)
    })
})

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./诗2.txt', 'utf8', (err, data) => {
            //返回成功后的结果
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./诗3.txt', 'utf8', (err, data) => {
            //往数组里追加数据push  
            value.push(data)
            //返回成功后的结果
            resolve(value)
            // reject('读取失败了')
        })
    })
}).then(value => {
    console.log(value.join('\n'))
}, resone => {
    console.log(resone)
})





































