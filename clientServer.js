/**
 * Created by bankeys-01 on 2016/7/29.
 */
var http =require("http");


var options = {
    host : "localhost",
    port : "8181",
    path : "/index.html"
};

//处理响应的回调函数

var callback = function(res){
    //不断更新数据
    var body = "";
    res.on("data",function(data){
        body+=data;
    });
    res.on("end",function(){
        //数据接收完成
        console.log(body);
    });
};
var req = http.request(options,callback);
req.end();