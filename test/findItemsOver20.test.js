var assert = require("assert");
var findItemsOver20 = require("../findItemsOver20");

describe("The findItemsOver20 function", function(list) {
    it("should find items with quantity over 20", function() {
        var list = [
            { name: "apples", qty: 10 },
            { name: "pears", qty: 37 },
            { name: "bananas", qty: 27 },
            { name: "apples", qty: 3 }
        ];
        assert.deepEqual([{ name: "pears", qty: 37 }, { name: "bananas", qty: 27 }], findItemsOver20(list, 20));
    });
    it("should find pear with quantity over 20", function() {
        var list = [
            { name: "apples", qty: 10 },
            { name: "pears", qty: 37 },
            { name: "bananas", qty: 27 },
            { name: "apples", qty: 3 }
        ];
        assert.deepEqual([{ name: "pears", qty: 37 }], findItemsOver20([{ name: "pears", qty: 37 }]));

    })
    it("should find no item with quantity", function() {
        var list = [
            { name: "apples", qty: 10 },
            { name: "pears", qty: 37 },
            { name: "bananas", qty: 27 },
            { name: "apples", qty: 3 }
        ];
        assert.deepEqual([], findItemsOver20([]));

    })
});