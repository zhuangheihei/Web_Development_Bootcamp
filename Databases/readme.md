#Databases

##Intro to Databases
* What is a database? 
    * A collection of information/data
    * Has an interface
* SQL(relational) vs. NoSQL(non-relational)

#Intro to MongoDB
* What is MongoDB?
* Why are we using it?
* Let's Install It!
  * Go to cloud 9 to find how to install MongoDB
  * Follow the instruction
  * Run the MongoDB with $ ./mongod
  * Leave the terminal tag, so that MongoDB will run in background.
  * TROUBLESHOOT: If "unclean shutdown detected", delete /data/mongod.lock and then run "mongod --repair"

#Our First Mongo Commands
* mongod: run MongoDB
* mongo: open Mongo shell, where we interact with MongoDB
* help:
* show dbs: show dbs which are currently exist
* use: can switch to the database we called
* insert: db.dogs.insert() dogs is the collection, insert is command.
* find: db.dogs.find(), find all dogs collections; db.dogs.find({name:"Hong"}) find specific dog in db
* update: db.dogs.update({name:"Hong"},{$set: {breed: "Labradoodle"}}), updates a specific collection.
* remove: db.dogs.remove({name:"Hong"});

#Mongoose
* What Is Mongoose?
  * Is a elegent MongoDB object modeling for Node.JS. Installed using NPM, and help us to interact with MongoDB. Just like JQuery help us to interact with DOM.
* Why are we using it?
* Interact with a Mongo Database using Mongoose


====================
RELATIONAL DATABASE:
====================
* Specific tables
* Flat
* Need to define tables

USERS TABLE
id | name  |  age  |  city
-------------------------
1  | Tim   |  57   |  NYC           
2  | Ira   |  24   |  Missoula 
3  | Sue   |  40   |  Boulder


COMMENTS TABLE
id |       text  
--------------------------
1  | "lol"
2  | "Come visit Montana!"   
3  | "I love puppies!!!"
4  | "Seriously Montana is great!"


USER/COMMENTS JOIN TABLE
userId  |  commentId
---------------------------
   1         3
   2         2
   2         4
   3         1
   
   
   
==========================
A NON-RELATIONAL DATABASE:
==========================
* Not flat
* No specific table
* Nested, just like JavaScript
* Flexible structure

{
  name: "Ira",
  age: 24,
  city: Missoula,
  comments: [
    {text: "Come visit Montana!"},
    {text: "Seriously Montana is great!"},
    {text: "Why does no one care about Montana???"}
  ],
  favColor: "purple"
}


{
  name: "Tammy",
  age: 24,
  city: Missoula,
  comments: [
    {text: "Come visit Montana!"},
    {text: "Seriously Montana is great!"},
    {text: "Why does no one care about Montana???"}
  ],
  favFood: "Ribeye"
}






