/**
 * Created by bankeys-01 on 2016/7/29.
 */
var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("first")
});
var server = app.listen(8181,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("qi dong");
});