console.log("=====================");
console.log("WELCOME TO MY SHOP!");
console.log("=====================");
var faker = require("faker");
//var product;
//var price;
for(var i = 0; i < 10; i++){
    var product = faker.name.findName();
    var price = faker.commerce.price();
    var out = product + " - " + price;
    console.log(out);
}
