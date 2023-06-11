const util = require('util')
const fs = require('fs')
const fn = util.promisify(fs.readFile)
fn('./内容.txt').then(data => {
    console.log(data.toString())
}, err => {
    console.log(err)
})


















