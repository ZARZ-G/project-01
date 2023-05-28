const express = require('express')
const router = express.Router()
const expressjoi = require('@escook/express-joi')
//给路由绑定处理函数
const artacte_handler = require('../router_handler/artcate')
//挂载表单的验证规则
const { add_cate_schema } = require('../schema/artcate')

const { delete_cate_schema } = require('../schema/artcate')

const { get_cate_schema } = require('../schema/artcate')

const { update_cate_schema } = require('../schema/artcate')
//TODO:给不同的路由挂载处理函数 表单验证

//分类查找
router.get('/cates', artacte_handler.getArticleCates)
//添加
router.post('/addcates', expressjoi(add_cate_schema), artacte_handler.addArticleCates)
//删除
router.get('/deletecate/:id', expressjoi(delete_cate_schema), artacte_handler.deleteCateById)

//根据id获取文章分类
router.get('/cates/:id', expressjoi(get_cate_schema), artacte_handler.getArticleByid)

//根据id更新分类数据
router.post('/updatecate', expressjoi(update_cate_schema), artacte_handler.updateCateById)





module.exports = router