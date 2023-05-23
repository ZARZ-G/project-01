const fs = require('fs')
const path = require('path')

//正则
const regStyle = /<style>[\s\S]*<\/style>/
const regJs = /<script>[\s\S]*<\/script>/


//读取源文件
fs.readFile(path.join(__dirname, './时钟素材.html'), 'utf-8', function (err, dataStr) {
    if (err) return console.log('读取失败' + err.message)
    //3个方法
    getStyle(dataStr)
    getJs(dataStr)
    getHtml(dataStr)

})


function getStyle(dataStr) {
    const str1 = regStyle.exec(dataStr).join('').replace('<style>', ' ').replace('</style>', ' ')
    fs.writeFile(path.join(__dirname, './clock/index.css'), str1, function (err) {
        if (err) return console.log('css写入失败' + err.message)
        console.log('css写入成功')
    })
}



function getJs(dataStr) {
    const str2 = regJs.exec(dataStr).join('').replace('<script>', ' ').replace('</script>', ' ')
    fs.writeFile(path.join(__dirname, './clock/index.js'), str2, err => {
        if (err) return console.log('写入失败' + err.message)
        console.log('js写入成功')
    })

}

/* <link rel="stylesheet" href="style.css">
    <script src=""></script> */

function getHtml(dataStr) {
    const str3 = dataStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regJs, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './clock/index.html'), str3, err => {
        if (err) return console.log('写入失败' + err.message)
        console.log('html写入成功')
    })
}














