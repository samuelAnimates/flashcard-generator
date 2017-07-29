var basicCard = require("./basicCard.js");
var clozeCard = require("./clozeCard.js");

var mynewcard = new basicCard("Springfield is the capital of which US state?","Illinois");
var myclozeCard = new clozeCard("Springfield is the capital of Illinois.", "Illinois");

console.log(mynewcard);
console.log(myclozeCard);