/**
 * Created by bankeys-01 on 2016/7/28.
 */
var http = require("http");

var fs = require("fs");
var url = require("url");
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;//解析请求
    console.log("Request for " + pathname + " received.");//输出请求文件名

    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            console.log(err);
            res.writeHead(404,{"Content-Type":"text/html"});
        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data.toString());
        }
        res.end();
    })
}).listen(8181);
console.log("服务已经启动");