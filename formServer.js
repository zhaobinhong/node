/**
 * Created by bankeys-01 on 2016/8/1.
 */

var express = require("express");
var app=express();

app.use(express.static("public"));

app.get("/form.html",function(req,res){
    res.sendFile(__dirname + "/"+"form.html");
});

app.get("/process_get",function(req,res){
    response={
        user_name:req.query.user_name,
        password:req.query.password
    };
    console.log(response);
    res.end(JSON.stringify(response))
});

var server = app.listen(8181,function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log("服务已启动",host,port);
});