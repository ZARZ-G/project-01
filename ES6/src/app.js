import * as m1 from '../dist/m1.js'
import * as m2 from '../dist/m2.js'
import * as m3 from '../dist/m3.js'

console.log(m1)
console.log(m2)
console.log(m3)
m3.default.fn()


// //引入jquery 修改背景颜色
// const $ = require('jquery')
import $ from 'jquery'
$('html').css('background', 'pink')
