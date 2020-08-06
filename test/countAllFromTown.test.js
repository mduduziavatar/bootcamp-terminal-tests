let assert = require("assert");
let countAllFromTown = require("../countAllFromTown")

describe("The countAllFromTown function", function() {
    it("should return all for Stellenbosh CL", function() {
        assert.equal(0, countAllFromTown("CL"));
    });
    it("should return all for Paarl CJ", function() {
        assert.equal(0, countAllFromTown("CJ"));
    });

});