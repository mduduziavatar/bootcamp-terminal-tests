let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe("countRegNumber is working properly", function() {
    it("should return true for CA ", function() {
        assert.equal(true, countRegNumber("CA"));
    });
    it("should return true for CY ", function() {
        assert.equal(true, countRegNumber("CY"))
    });
    it("should return true for CJ ", function() {
        assert.equal(true, countRegNumber("CJ"))
    });
});