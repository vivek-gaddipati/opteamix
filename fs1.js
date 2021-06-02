var fs = require('fs');

var data = "";
// async code with callback
fs.readFile("async.js", (err,content) => {
    data = content;
    console.log("INSIDE:" + data.toString());
});

console.log("done!!!");

console.log("OUTSIDE: " + data.toString());