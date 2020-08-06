var assert = require("assert");
var transportFee = require("../transportFee");

describe("The transportFee function", function() {
    it("should return free for night shift", function() {
        assert.equal("free", transportFee("free"));
    });
    it("should return R20 for morining", function() {
        assert.equal("R20", transportFee("morning"));
    });
    it("should return R10 for afternoon", function() {
        assert.equal("R10", transportFee("afternoon"));
    });


});