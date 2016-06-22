/**
 * Created by bankeys-01 on 2016/8/1.
 */
var express = require("express");
var app =express();

app.use(express.static("public"));
app.get("/",function(req,res){
    res.send("<div id='div'>111<div>");

});
var server=app.listen(8181,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("服务启动",host,port);
});