var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

//还用这种wet的low逼方式啊！记住DRY！Don't repeat yourself!
// app.get("/speak/pig",function(req, res){
//     res.send("The pig says 'Oink'");
// });

// app.get("/speak/cow", function(req, res) {
//     res.send("The cow says 'Moo'");
// });

// app.get("/speak/dog", function(req, res) {
//     res.send("The dog says 'Woof woof!'"); 
// });

app.get("/speak/:animal", function(req, res) {
    //这样子可以产生一些key-value pairs
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!!",
        cat: "I hate you human",
        goldfish: "..."
    }
        var animal = req.params.animal.toLowerCase();
        var sound = sounds[animal];
        res.send("The " + animal + " says " + sound);
     
});

app.get("/repeat/:text/:number", function(req, res) {
    var num = Number(req.params.number);
    var content = req.params.text;
    var out = "";
    for(var i = 0; i < num; i++){
        out += content + " "; 
    }
    res.send(out);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?")
})

//Tell Express to listen for requests(start server);
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});