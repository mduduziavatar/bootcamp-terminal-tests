var assert = require("assert");
var regCheck = require("../regCheck");

describe("regCheck tester if works", function() {
    it("should return true for L", function() {
        assert.equal(false, regCheck("L"));
    });
    it("should return true for MP", function() {
        assert.equal(false, regCheck("MP"));
    });
    it("should return true for EC", function() {
        assert.equal(false, regCheck("EC"));
    });
    it("should return true for GP", function() {
        assert.equal(false, regCheck("GP"));
    });
});