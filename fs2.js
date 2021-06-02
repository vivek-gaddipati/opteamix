var fs = require('fs');

var data =  fs.readFileSync("async.js"); //blocking

console.log("done!!!");

console.log("OUTSIDE: " + data.toString());