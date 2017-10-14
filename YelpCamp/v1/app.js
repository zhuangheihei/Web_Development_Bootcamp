var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//背住或者复制粘贴就可以
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
     {name: "KaoLengMian", image: "http://upload-images.jianshu.io/upload_images/3061748-f4960c6c07b570c2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"},
     {name: "Fried Tofu", image: "https://puui.qpic.cn/qqvideo_ori/0/r03943tqajt_496_280/0"},
     {name: "Loodles", image: "http://fj.sinaimg.cn/2013/1111/U7867P911DT20131111163207.jpg"}
];


app.get("/", function(req,res){
    res.render("landing"); 
});


app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds: campgrounds});
});


app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
}) ;


app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs"); 
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});