/**
 * Created by bankeys-01 on 2016/8/1.
 */
var express=require("express");
var app=express();

//页面输出
app.get("/",function(req,res){
    console.log("page GET request");
    res.send("hello GET")
});

//post请求
app.post("/",function(req,res){
    console.log("page POST request");
    res.send("Hell POST");
});

//del_user 页面响应
app.delete("/del_user",function(req,res){
    console.log("/del_user 响应 Delete 请求");
    res.send("删除页面");
});

//list_user 页面GET请求
app.get("/list_user",function(req,res){
    console.log("list_user GET 请求");
    res.send("用户列表页");

});

//对页面 ab*cd GET请求
app.get("/ab*cd",function(req,res){
    console.log("ab*cd GET 请求");
    res.send("正则匹配");
});

var server = app.listen(8181,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用已启动",host,port);
})
