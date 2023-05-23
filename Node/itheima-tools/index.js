//主模块
//导入各个模块
const date = require('./src/dateFormat.js')
const Escape = require('./src/htmlEscape.js')

//向外公开方法
module.exports = {
    ...date,
    ...Escape
}