function Method(path) {
    const fs = require('fs')
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) return reject(err)
            return resolve(data)
        })
    })
}


Method('./内容.txt').then(data => {
    console.log(data)
}, err => {
    console.log(err)
})



































