// import * as m1 from './hellow.js'
document.querySelector('button').addEventListener('click', function () {
    //动态导入模块
    import('./hellow.js').then(module => {
        module.hellow()
    })

})