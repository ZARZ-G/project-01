const fs = require('fs')
const p = new Promise((resolve, reject) => {
    // fs.readFile('./诗1.txt', 'utf8', (err, data) => {
    //     if (err) reject('读取失败')
    //     resolve(data)
    // })

    throw '读取失败'
})

// p.then(value => {
//     console.log(value)
// })


//专门用来捕获错误
p.catch((reason) => {
    console.warn(reason)
})








