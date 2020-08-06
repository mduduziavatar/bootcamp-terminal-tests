var assert = require("assert");
var greet = require("../greet");

describe('The greet function', function() {

    it('should get Name correctly', function() {
        assert.equal('Hello, Name', greet('Name'));
    });
    it('should greet Siphiwe correctly', function() {
        // this test will fail - can you fix it?
        assert.equal('Hello, Siphiwe', greet('Siphiwe'));
    });
});