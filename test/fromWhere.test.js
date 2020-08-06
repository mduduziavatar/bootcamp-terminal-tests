var assert = require("assert");
var fromWhere = require("../fromWhere");

describe("The fromWhere function", function() {
    it("should return reg numbers from Bellville as CY", function() {
        assert.equal("Bellville", fromWhere("CY"));
    });
    it("should return reg numbers from Cape Town as CA", function() {
        assert.equal("Cape Town", fromWhere("CA"));
    });
    it("should return reg numbers from Paarl as CJ", function() {
        assert.equal("Paarl", fromWhere("CJ"));
    });
    it("should return reg numbers from some other place", function() {
        assert.equal("Some other place!", fromWhere(""));
    });

});;