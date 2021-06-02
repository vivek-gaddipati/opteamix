var http = require('http');
var rgbToHex = require('./converter').rgbToHex;
var hexToRgb = require('./converter').hexToRgb;

var url = require('url');

// http://localhost:3000/rgbtohex?r=255&g=100&b=120
// http://localhost:3000/hextorgb?hex=ff00ff

var server = http.createServer((req,res) => {
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url,true).query;
    if(pathname.substring(1) === 'rgbtohex') {
         res.end(rgbToHex(parseInt(query.r), parseInt(query.g), parseInt(query.b)));
    } else if(pathname.substring(1) === 'hextorgb') {
        
        res.write(hexToRgb(query.hex).toString());
        res.end();
    }
});

server.listen(3000, () => {
    console.log("server started [http://localhost:3000]");
});
