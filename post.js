/**
 * Created by bankeys-01 on 2016/7/28.
 */

var http = require ("http");
var querystring=require("querystring");
var util= require("util");

http.createServer(function(req,res){
    var post="";  //定义一个post变量用于暂存请求体的信息
    req.on("data",function(chunk){
        post+=chunk; //通过req的data事件监听函数，每当接收到请求体的数据，就累加到post变量中
    });
    req.on("end",function(){
        post=querystring.parse(post);//在end 事件触发querystring.parse将post解析为真正的POST请求格式,向客户端返回

        res.writeHead(200,{"Content-Type":"text/plain","charset":"GBK","Access-Control-Allow-Origin":"http://localhost"});
        res.write('你好呀\
                </html>');
        res.end(util.inspect(post));

    });
}).listen(63342);