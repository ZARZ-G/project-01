// const date = new Date()
// //获取年月日 时分秒
// //将时间进行补零操作
// const year = date.getFullYear()
// const month = date.getMonth() + 1
// const day = date.getDate()
// const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
// const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
// const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

// console.log('当前的日期是' + year + '年' + month + '月' + day + '日', '时间是' + h + '点' + m + '分' + s + '秒')

//导入第三方包

const moment = require('moment')
console.log(moment().format(`YYYY年/M月/D号 HH:MM:SS`))
