var fs = require('fs');

var stream = fs.createReadStream("async.js");

stream.on("data", (chunk) => {
    console.log(chunk.toString());
})

stream.on("end", () => {
    console.log("Completed!!!");
})

stream.on("error", (err) => {
    console.log(err);
})


