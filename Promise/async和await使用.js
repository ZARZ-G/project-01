const fs = require('fs')
const util = require('util')
const mine = util.promisify(fs.readFile)//转换成promise类型的方法

// function fn1() {
//     fs.readFile('./new1.txt', 'utf-8', (err, data) => {
//         if (err) return console.log(err)
//         console.log(data)
//     })
// }


// function fn2() {
//     fs.readFile('./new2.txt', 'utf-8', (err, data) => {
//         if (err) return console.log(err)
//         console.log(data)
//     })
// }


// function fn3() {
//     fs.readFile('./new3.txt', 'utf-8', (err, data) => {
//         if (err) return console.log(err)
//         console.log(data)
//     })
// }

// setTimeout(() => {
//     fn1()
//     setTimeout(() => {
//         fn2()
//         setTimeout(() => {
//             fn3()
//         }, 0);
//     }, 100);
// }, 200);

//使用async和await方式
async function fn() {
    //声明await对象
    try {
        const data1 = await mine('./new1.txt', 'utf-8')
        const data2 = await mine('./new2.txt', 'utf-8')
        const data3 = await mine('./new3.txt', 'utf-8')
        console.log(data1 + '\n' + data2 + '\n' + data3)
    }
    catch (err) {
        console.log(err)
    }
}

fn()


























