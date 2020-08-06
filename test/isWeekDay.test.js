var assert = require("assert");
var isWeekday = require("../isWeekday");

describe("The isWeekday function ", function() {
    it("should say that Monday is a weekday", function() {
        assert.equal(true, isWeekday('M'));
    });
    it("should say that Sunday is not weekday", function() {
        assert.equal(false, isWeekday('S'));
    });
    it("should say that Friday is a weekday", function() {
        assert.equal(false, isWeekday('F'));
    });

});