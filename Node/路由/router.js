//路由模块
//导入服务器模块
const express = require('express')
//快速创建路由
const router = express.Router()
router.get('/', (req, res) => {
    res.send('你调用了路由的get方法')
})

router.post('/', (req, res) => {
    res.send('你调用了路由的post方法')
})


//将路由导出到外面
module.exports = router