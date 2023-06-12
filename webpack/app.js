//静态导入会报错 需要用webpack解决
import './src/my.js'

//动态import 实现
document.querySelector('.btn').addEventListener('click', () => {
    import('./src/my.js').then(obj => {
        obj.fn()
        console.log(obj.aihao)
    })
    // fn()
})