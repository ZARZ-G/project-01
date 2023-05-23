##
安装方法
```
npm i ithema-tools-zkk
```
导入方式
```
const heima=require('./index.js')
```
格式化时间
```
const date=heima.dateFormat()
console.log(date)
```
转义HTML中的特殊字符
```
const str = heima.htmlEscape('<h1>我是node.js</h1>')
console.log(str)
```
还原HTML中的特殊字符
```
const newstr= heima.restore(str)
console.log(newstr)
```
开源协议
```
ISC
```