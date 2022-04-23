var express = require("express");
var body_parser = require("body-parser");
var cookie_parser = require("cookie-parser");
var multer = require("multer");
var mysql = require("mysql");
var app = express();

app.use(express.json());
app.use(express.static("public"));



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {

        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();

});

app.get("/",function(req,res){
    res.send("welcome");
    res.end();
});



app.use("/buisness/venodrs",require("./routes/businessvendors"));

const  PORT = process.env.PORT || 8081;
app.listen(PORT,function(){
    console.log("welcome to node js");
});