const express = require('express')
const app = express()


// app.use(express.json())//中间件
// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('ok')
// })

// app.get('/', (req, res) => {
//     console.log(req.body)
//     res.send('ok')
// })

// app.listen(80, () => {
//     console.log('http://127.0.0.1')
// })


app.use(express.urlencoded())
app.post('/', (req, res) => {
    // app.use(express.urlencoded({ extended: false }))//固定写法
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})

