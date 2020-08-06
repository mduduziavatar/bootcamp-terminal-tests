var assert = require("assert");
var findItemsOver = require("../findItemsOver");

describe("The findItemsOver function", function(itemList, threshold) {
    it("should find items with quantity over 30", function() {
        var threshold = 30;
        var itemList = [
            { name: "apples", qty: 10 },
            { name: "pears", qty: 37 },
            { name: "bananas", qty: 27 },
            { name: "apples", qty: 3 },
            { "name": "apples", "qty": 10 },
            { "name": "pears", "qty": 19 },
            { "name": "bananas", "qty": 17 },
            { "name": "apples", "qty": 3 },
            { "name": "apples", "qty": 40 },
            { "name": "pears", "qty": 20 },
            { "name": "bananas", "qty": 23 },
            { "name": "apples", "qty": 37 }
        ];
        assert.deepEqual([{ name: "pears", qty: 37 }, { "name": "apples", "qty": 40 }, { "name": "apples", "qty": 37 }], findItemsOver(itemList, threshold));

    });
    it("should find pears with quantity over 30", function() {
        var threshold = 30;
        var itemList = [
            { name: "apples", qty: 10 },
            { name: "pears", qty: 37 },
            { name: "bananas", qty: 27 },
            { name: "apples", qty: 3 },
        ];
        assert.deepEqual([{ name: "pears", qty: 37 }], findItemsOver(itemList, threshold));

    });
    it("should find all items with quantity over 3", function() {
        var threshold = 2;
        var itemList = [
            { name: "apples", qty: 10 },
            { name: "pears", qty: 37 },
            { name: "bananas", qty: 27 },
            { name: "apples", qty: 3 },
        ];
        assert.deepEqual([{ name: "apples", qty: 10 }, { name: "pears", qty: 37 }, { name: "bananas", qty: 27 }, { name: "apples", qty: 3 }], findItemsOver(itemList, threshold));

    });
});