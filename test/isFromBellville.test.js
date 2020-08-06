var assert = require("assert");
var isFromBellville = require("../IsFromBellville");


describe("The isFromBellville function", function() {
    it("should return true for CY", function() {
        assert.equal(true, isFromBellville("CY"));
    });

    it("should return false for CJ", function() {
        assert.equal(false, isFromBellville("CJ"));
    });

});