var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search"); 
});

app.get("/results", function(req, res){
    //提取req中的搜索电影的名字
    var query = req.query.search;
    //组合成url
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){ 
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});


//Make sure this app.js is good.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app has started!!!");
});