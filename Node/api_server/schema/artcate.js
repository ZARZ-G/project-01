//-------表单的验证约束
const joi = require('joi')
const name = joi.string().required()
const alias = joi.string().alphanum().required()

//共享验证对象
//添加
exports.add_cate_schema = {
    body: {
        name,
        alias
    }
}

const id = joi.number().integer().min(1).required()
//删除
exports.delete_cate_schema = {
    params: { id }
}

//id获取文章分类
exports.get_cate_schema = {
    params: { id }
}

//根据id更新分类数据
exports.update_cate_schema = {
    body: {
        Id: id,
        name,
        alias,
    }
}


