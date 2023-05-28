
//require表示引包，引包就是引用一个功能.只有引了包功能才能用
var http = require("http");
//创建服务器，参数是一个回调函数，回调函数作用当请求进来，要做的事情
var server = http.createServer()
//var server = http.createServer(function (req, res) {
//req表示请求，request;  res表示响应，response
//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
// res.writeHead(200c:\Users\MECHREVO\Desktop\itheima-tools, { "Content-type": "text/html;charset=UTF-8" });
// //响应给页面一个helloWorld
// res.end("Hello World");
//});
server.on('request', function (req, res) {
    // console.log('hello world')
    const str = '中华人民共和国'
    console.log(str)//再控制台打印内容
    res.end(str)//向网页上打印内容
})


//运行服务器，监听3000端口（端口号可以任改）
server.listen(3000, "127.0.0.1:3000");
