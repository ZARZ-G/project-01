//定义article路由的处理函数
// const { result } = require('@hapi/joi/lib/base')
const multer = require('multer')
const path = require('path')
const upload = multer({ dest: path.join(__dirname, '../uploads') })
const db = require('../db/index')




exports.addArticle = (req, res) => {
    if (!req.file || req.file.fieldname !== 'cover_img')
        return res.cc('文章封面是必选参数')
    console.log(req.body)
    console.log('------分割线-------')
    console.log(req.file)

    //创建文章对象
    const articleInfo = {
        ...req.body,
        cover_img: path.join('/uploads', req.file.filename),
        pub_date: new Date(),
        author_id: req.user.id
    }

    const sql = 'insert into ev_articles set ?'
    db.query(sql, articleInfo, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1)
            return res.cc('发布文章失败')
        res.cc('文章发布成功', 0)
    })

    // res.send('ok')

}