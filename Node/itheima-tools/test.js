// 请求自己写的模块
const heima = require('./index.js')
//调用自己的方法
const date = heima.dateFormat()
console.log(date)
const str = heima.htmlEscape('<h1>我是node.js</h1>')
console.log(str)
const newstr = heima.restore(str)
console.log(newstr)
