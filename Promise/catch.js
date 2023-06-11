const p = new Promise((resolve, reject) => {
    // return resolve('执行成功')
    return reject('执行失败')

})

// p.then(value => {
//     console.log(value)
// })

//当发生错误时执行catch
p.catch(err => {
    console.log(err)
})




