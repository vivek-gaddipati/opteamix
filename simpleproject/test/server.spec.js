var expect = require('chai').expect;
var request = require('request');

describe("testing converter server ", () => {
    it("testing server response for rgb to hex", (done) => {
        var uri = "http://localhost:3000/rgbtohex?r=255&g=100&b=120";
        request(uri, (err, response, body) => {
            var result = "ff6478";
            expect(body).to.be.equal(result);
            done();
        });
    });
});