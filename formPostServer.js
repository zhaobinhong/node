/**
 * Created by bankeys-01 on 2016/8/1.
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static("public"));


app.get("/formPost.html", function (req, res) {
    res.sendFile(__dirname + "/" + "formPost.html");

});

app.post("/process_post", urlencodedParser, function (req, res) {
    response = {
        user_name:req.body.user_name,
        password:req.body.password
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8281,function(){
    var host= server.address().address;
    var port=server.address().port;
    console.log("已启动",host,port);
});

