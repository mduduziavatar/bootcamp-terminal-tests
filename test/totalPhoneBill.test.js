var assert = require("assert");
var totalPhoneBill = require("../totalPhoneBill");


describe("The totalPhoneBill function", function() {
    it("should have sms bill", function() {
        assert.equal("R0.65", totalPhoneBill("sms"));
    });
    it("should have call bill", function() {
        assert.equal("R2.75", totalPhoneBill("call"));
    });

});