/**
 * Created by bankeys-01 on 2016/7/28.
 */
var http = require("http");
var url = require("url");
var util = require("util");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
    console.log(req.url)
}).listen(3000);