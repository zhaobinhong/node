/**
 * Created by bankeys-01 on 2016/8/11.
 */
var express = require("express"),
    app = express(),
    fs = require("fs"),
    bodyParser = require("body-parser"),
    multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({
    dest: "/tmp/"
}).array("image"));

app.get("/fileUpload.html", function (req, res) {
    res.sendFile(__dirname + "/" + "fileUpload.html");
});
app.post("/file_upload", function (req, res) {
    console.log(req.files);
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: "file uploaded successfully",
                    filename: req.files[0].originalname
                }
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8181, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("已启动", host, port);
});
