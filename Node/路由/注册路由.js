const express = require('express')
const router = express.Router()


//编写get接口
router.get('/', (req, res) => {
    //data表示查询到的数据
    const data = req.query
    //将响应的结果发送到页面
    res.send({
        status: 0,
        msg: 'get请求成功',
        data: data,
    })

})
//编写post接口
router.post('/', (req, res) => {
    const data = req.body
    res.send({
        status: 0,
        mag: 'post请求成功',
        data: data
    })
})




module.exports = router