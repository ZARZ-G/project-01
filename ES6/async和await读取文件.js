const fs = require('fs')
function getshi() {
    return new Promise((resolve, reject) => {
        fs.readFile('./诗.txt', 'utf8', (err, data) => {
            if (err) reject('读取失败')
            resolve(data)
        })

    })
}

function getshi2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./诗2.txt', 'utf8', (err, data) => {
            if (err) reject('读取失败')
            resolve(data)
        })

    })
}

function getshi3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./诗3.txt', 'utf8', (err, data) => {
            if (err) reject('读取失败')
            resolve(data)
        })
    })
}




async function fn() {
    const res1 = await getshi()
    console.log(res1)
    const res2 = await getshi2()
    console.log(res2)
    try {
        const res3 = await getshi3()
        console.log(res3)
    }
    catch (err) {
        console.log(err)
    }

    const res4 = await '美国末日'
    console.log(res4)

}

console.log(fn())