
// var app = require("express")();可以这样直接调用express
var express = require("express");
var app = express();

app.get("/", function(res, req){
    //render的括号里可以发送HTML这种文件
    res.render("home.ejs");
});

//ejs：embeded JavaScript
app.get("/fallinlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs",{thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author:"Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title:"Can you believe this pomsky?", author: "Colt"}
    ];
    
    res.render("posts.ejs", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});

