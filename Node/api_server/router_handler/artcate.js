const db = require('../db/index')
//获取文章分类列表
exports.getArticleCates = (req, res) => {
    const sql = 'select *from ev_article_cate where is_delete=0 order by id asc'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '获取文章分类成功',
            data: results
        })
    })

}

//新增文章分类
exports.addArticleCates = (req, res) => {
    const sql = 'select *from ev_article_cate where name=? or alias=?'
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (err) return res.send(err)
        if (results.length === 2) return res.cc('分类名称与别名被占用，请更换后重试')
        //分别判断分类别名和分类名称是否被占用
        if (results.length === 1 && results[0].name === req.body.name)
            return res.cc('分类名称被占用请更换')
        if (results.length === 1 && results[0].alias === req.body.alias)
            return res.cc('分类别名被占用请更换')

        //实现文章分类功能
        const sql = 'insert into ev_article_cate set ?'
        db.query(sql, req.body, (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('新增文章失败')
            res.cc('新增文章成功', 0)
        })
    })

}

//删除文章
exports.deleteCateById = (req, res) => {
    //TODO:is_delete =1 表示被删除 0没有被删除
    const sql = 'update ev_article_cate set is_delete=1 where id=?'
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('没有找到该行，删除文章失败')
        res.cc('删除成功', 0)
    })

}


//根据id获取文章分类
exports.getArticleByid = (req, res) => {
    const sql = 'select* from ev_article_cate where id=?'
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('获取文章数据失败')
        //成功
        res.cc({
            status: 0,
            message: '获取文章数据成功',
            data: results[0]
        })
    })
}

//根据id更新分类数据
exports.updateCateById = (req, res) => {
    const sql = 'select *from ev_article_cate where Id=? and (name= ? or alias= ?)'
    db.query(sql, [req.body.Id, req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err)
        // 判断 分类名称 和 分类别名 是否被占用
        if (results.length === 2) return res.cc('分类名称和别名被占用请更换后重试')
        if (results.length === 1 && results[0].name === req.body.name)
            return res.cc('分类名称被占用请更换后重试')

        if (results.length === 1 && results[0].alias === req.body.name)
            return res.cc('分类别名被占用请更换后重试')


        // 成功
        const sql = 'update ev_article_cate set ? where Id=?'
        db.query(sql, [req.body, req.body.Id], (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('更新文章分类失败')
            res.cc('更新文章分类成功')
        })
    })
}