#Associations

##Intro to Associations
* Define associations
* Discuss: one:one, one:many, and many:many relations

Associations means that data is related to other data.

One entity is related to one another entity: one to one association
E.g. one book has one title

One entity is related to so many other entities:
E.g., Facebook
One User is associated to:
Post
Photos
Albums
Comments
Tags
Likes

Many to many relations means the associations goes both ways.
One typical example is students can sign up for multiple courses, while courses have multiple students enroulled.

We will learn how to connect different models using mongoose, in two ways.

##Embedding data.
User
Post

##Referencing Data

##Module.Exports
* Introduce module.exports 
    * Make code more clean and modular.
    * If other app wants to use the same models, then it will be easy for them to use.
* Move our models into seperate files