$(function () {
    //先渲染服务器自带的数据
    function render() {
        $('.tbody').empty('')
        $.ajax({
            type: 'get',
            url: 'http://www.liulongbin.top:3006/api/cmtlist',
            data: {},
            success: function (res) {
                $.each(res.data, function (i, item) {
                    const { username, content, time } = item
                    $('.tbody').append(`
                    <div class="li">
                    <p class="retext">${content}</p>
                    <div>
                    <p class="critic">评论人：${username}</p>
                    <p class="ctime">评论时间：${time}</p>
                    </div>
                    </div>
                    `)

                })
            }
        })
    }
    render()

    //当点击发送按钮后打印输出的结果
    $('form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 201) return alert('评论失败')
                render()
            }
        })
        $(this)[0].reset()// 清空
    })
})