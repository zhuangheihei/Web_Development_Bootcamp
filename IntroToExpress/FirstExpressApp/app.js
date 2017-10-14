var express = require("express");
var app = express();

// "/" => "hi there" This is main page!
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});

// "/dog" -> "Meow!"
app.get("/dog", function(req, res){
    res.send("Meow!!");
});

//this is how reddit routes around its pages
//the key is that when the url matches the specific pattern
//we defined, then we will be taken to this page.

//req in the funtion contains all the information of the
//incoming request, we can get the subredditName through 
//req.
app.get("/r/:subredditName", function(req, res){
    // console.log(req.params);
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!!!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    res.send("Welcome to a comment page!!!");
});

//star就代表没有的地址！
//Routes’ order matters! We should not put * ahead of those 
//routes above, cause they would not effective if * is ahead
//of them. If one of this callback function is triggered, then
//the rest would not be run.
app.get("*", function(req, res) {
    res.send("Page Not Found!!");
});


//Tell Express to listen for requests(start server);
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});