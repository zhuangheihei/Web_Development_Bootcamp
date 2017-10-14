var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {useMongoClient: true});

// POST - title, content
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);
/*
var newUser = new User({
    email: "hermione@hogwarts.edu",
    name: "Hermione Granger"
});

newUser.posts.push({
    title: "How to bre polyjuice potion",
    content: "Just kidding.  Go to potions class to learn it!"
});

newUser.save(function(err, user){
  if(err){
      console.log(err);
  } else {
      console.log(user);
  }
});

var newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});
*/
//Callback function is necessary every time we use mongoose.
//Just to find Hermione back
User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        //console.log(err);
    } else {
        //Find the user and post a new post and associated with it.
        user.posts.push({
            title: "3 Things I really hate",
            content: "Voldemort.  Voldemort. Voldemort"
        });
        //Save the updated user into database.
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});