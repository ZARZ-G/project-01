//封装中间件
const qs = require('querystring')

const getDate = (req, res, next) => {
    let str = ''
    req.on('data', (joint) => {
        str += joint
    })
    req.on('end', () => {
        console.log(str)
        //将转义好的字符解析出来
        const newStr = qs.parse(str)
        req.body = newStr
        next()
    })

}


module.exports = getDate