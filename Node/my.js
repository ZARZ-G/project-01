console.log(module.exports === exports)
module.exports.name = '李四'
exports = {
    name: '小明',
    age: '30'
}