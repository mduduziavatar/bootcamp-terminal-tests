var assert = require("assert");
var countAllPaarl = require("../countAllPaarl");

describe("the countAllPaarl function", function() {
    it("should return registration numbers with CJ", function() {
        assert.equal(true, countAllPaarl("CJ"));
    });
    it("should not return registration numbers with CA", function() {
        assert.equal(false, countAllPaarl("CA"))
    });
    it("should not return registration numbers with CN", function() {
        assert.equal(false, countAllPaarl("CN"))
    });
    it("should not return registration numbers with CL", function() {
        assert.equal(false, countAllPaarl("CL"))
    });
});