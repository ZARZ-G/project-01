const express = require('express')
const router = express.Router()
const article_handler = require('../router_handler/article')
const expressjoi = require('@escook/express-joi')
const { add_article_schema } = require('../schema/article')

//定义路由
//先解析再验证表单数据
//访问不到upload方法
// router.post('/add', upload.single('cover_img'), expressjoi(add_article_schema), article_handler.addArticle)
router.post('/add', expressjoi(add_article_schema), article_handler.addArticle)

module.exports = router