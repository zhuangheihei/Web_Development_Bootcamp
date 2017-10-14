//To add some sample data into database and then test if our application is working.

var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

//define some campground sample data.
var data = [
    {
        name: "Five Spice Rolls/Chinese Meat Rolls 五香", 
        image: "http://www.whatsonxiamen.com/news_images/72082.jpg",
        description: "This is a snack made of minced meat (usually pork) and vegetables wrapped in a dry bean curd sheet. Although sold in stalls or small eateries, homemade Chinese Meat Rolls are far superior to those sold commercially."
    },
    {
        name: "Lor Mee/Chinese Braised Noodles 卤面", 
        image: "http://www.whatsonxiamen.com/news_images/50584.jpg",
        description: "Lor mee is a noodle dish served in a thick starchy gravy with thick yellow round noodles. Guests can add whatever they want from a large selection of side dishes."
    },
    {
        name: "Triangle-shaped Cakes三角饼", 
        image: "http://www.whatsonxiamen.com/news_images/156671.jpg",
        description: "This dish was once voted one of the most popular snacks in Zhangzhou. It features a crispy surface and different fillings including taro paste, pineapples, and minced meat."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "Zhangzhou's snackes are the best in the world!",
                            author: "Hong"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
