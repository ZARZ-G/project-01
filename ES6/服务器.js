const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    res.end(`  
            春日
                [ 宋 ] 朱熹
    胜日寻芳泗水滨，无边光景一时新。
    等闲识得东风面，万紫千红总是春。
    `)
})

server.listen('80', () => {
    console.log('http://127.0.0.1')
})