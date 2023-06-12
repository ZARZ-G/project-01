//导入jquery模块
import $ from 'jquery'
//导入css
import '../css/index.css'
//导入less
import '../css/index.less'
//导入图片
import logo from '../logo.png'


//jquery代码逻辑
$(function () {
    $('li:odd').css('background-color', 'pink')
    $('li:even').css('background-color', 'red')
    $('.img').attr('src', logo)
})



//处理js高级语法
function info(target) {
    target.info = '我是js的高级语法'
}
@info
class Person { }

console.log(Person.info)


consoe.log(123)//出错位置是19行 




