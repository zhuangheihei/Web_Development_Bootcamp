var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temprament: String
});

var cat = mongoose.model("cat", catSchema);

//adding a new cat to DB
// var george = new cat({
//     name: "Morris",
//     age: 7,
//     temprament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("error");
//     }else{
//         console.log("CAT SAVED");
//         console.log(cat);
//     }
// });

//We can create a new one and save right at once.
cat.create({
    name: "Snow White",
    age:15,
    temprament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    }else{
        console.log(cat);
    }
})


//retrive all cats from DB and console.log each one
cat.find({},function(err, cats){
    if(err){
        console.log(err);
    }else{
        console.log("All the cats");
        console.log(cats);
    }
})