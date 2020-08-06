var assert = require("assert");
var yearsAgo = require("../yearsAgo");


describe("The yearsAgo function", function() {
    it("should show you the current year when starting from 0", function() {
        assert.equal(2020, yearsAgo("0"));
    });
    it("should show no year when starting from current year 2020", function() {
        assert.equal(0, yearsAgo("2020"));
    });
    it("should show you 1976 when starting from 44", function() {
        assert.equal(1976, yearsAgo("44"));
    });

});