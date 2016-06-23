var jwt = require("jwt-simple");

var jes = {id:'jes',pass:'78901'};
var secret = "pk";

var token = jwt.encode(jes, secret);
console.log("token = ", token);

var token2 = jwt.decode(token, secret);
console.log("token2 = ", token2);
