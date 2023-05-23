//时间处理函数
function dateFormat() {
    const date = new Date()
    const yell = date.getFullYear()
    const month = zeroize(date.getMonth() + 1)
    const day = zeroize(date.getDate())

    const h = zeroize(date.getHours())
    const m = zeroize(date.getMinutes())
    const s = zeroize(date.getSeconds())
    return `${yell}年${month}月${day}日 ${h}时${m}分${s}秒`
}

//补零函数
function zeroize(date) {
    return date < 10 ? '0' + date : date
}

//必须加{}
module.exports = { dateFormat }