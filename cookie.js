/**
 * Created by bankeys-01 on 2016/8/11.
 */
var express = require("express"),
    cookieParser = require("cookie-parser"),
    app = express();
app.use(cookieParser());

app.get("/",function(req,res){
    console.log("Cookies:",req.cookies);
});
app.listen(8181);