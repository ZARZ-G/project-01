
//转义html字符
function htmlEscape(htmlStr) {
    const reg = /<|>|"|&/g
    return htmlStr.replace(reg, (match) => {
        switch (match) {
            case '<': return '&lt;'
            case '>': return '&gt;'
            case '"': return '&quot;'
            case '&': return '&amp;'
        }
    })
}

//还原html字符
function restore(str) {
    const reg = /&lt;|&gt;|&quot;|&amp;/g
    return str.replace(reg, (match) => {
        switch (match) {
            case '&lt;': return '<'
            case '&gt;': return '>'
            case '&quot;': return '"'
            case '&amp;': return '&'
        }
    })
}


module.exports = {
    htmlEscape,
    restore
}