const converter = require('../src/converter');

const expect = require('chai').expect; // resolve from node_modules folder

// Assemble Action Assert

// Test Suite
describe("testing converter", () => {
   
    // @Test
    it("test rgb to hex", function()  {
        let result = converter.rgbToHex(255,0,255);
        expect(result).to.be.equal("ff00ff");
    });


    it("test hex to rgb", () => {
        let result = converter.hexToRgb("ff00ff");
        expect(result).to.be.deep.equal([255,0,255]);
    });
});

