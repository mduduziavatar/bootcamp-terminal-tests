var assert = require("assert");
var mostProfitableDepartment = require("../mostProfitableDepartment");

describe("The mostProfitableDepartment function", function(sales) {
    it("should find the mostProfitableDepartment", function() {
        var sales = [
            { department: 'hardware', sales: 4500, day: 'Monday' },
            { department: 'outdoor', sales: 1500, day: 'Monday' },
            { department: 'carpentry', sales: 5500, day: 'Monday' },
            { department: 'hardware', sales: 7500, day: 'Tuesday' },
            { department: 'outdoor', sales: 2505, day: 'Tuesday' },
            { department: 'carpentry', sales: 1540, day: 'Tuesday' },
            { department: 'hardware', sales: 1500, day: 'Wednesday' },
            { department: 'outdoor', sales: 8507, day: 'Wednesday' },
            { department: 'carpentry', sales: 8009, day: 'Wednesday' },
            { department: 'hardware', sales: 12000, day: 'Thursday' },
            { department: 'outdoor', sales: 18007, day: 'Thursday' },
            { department: 'carpentry', sales: 6109, day: 'Thursday' },
            { department: 'hardware', sales: 7005, day: 'Friday' },
            { department: 'outdoor', sales: 12006, day: 'Friday' },
            { department: 'carpentry', sales: 16109, day: 'Friday' }
        ];
        assert.deepEqual("outdoor", mostProfitableDepartment(sales))
    });

    it('should return hardware as the most profitable department', function() {
        var sales = [
            { department: 'hardware', sales: 11500, day: 'Monday' },
            { department: 'outdoor', sales: 1500, day: 'Monday' },
            { department: 'carpentry', sales: 5500, day: 'Monday' },
            { department: 'hardware', sales: 72500, day: 'Tuesday' },
            { department: 'outdoor', sales: 2505, day: 'Tuesday' },
            { department: 'carpentry', sales: 1540, day: 'Tuesday' },
            { department: 'hardware', sales: 15500, day: 'Wednesday' },
            { department: 'outdoor', sales: 8507, day: 'Wednesday' },
            { department: 'carpentry', sales: 8009, day: 'Wednesday' },
            { department: 'hardware', sales: 122000, day: 'Thursday' },
            { department: 'outdoor', sales: 18007, day: 'Thursday' },
            { department: 'carpentry', sales: 6109, day: 'Thursday' },
            { department: 'hardware', sales: 70005, day: 'Friday' },
            { department: 'outdoor', sales: 12006, day: 'Friday' },
            { department: 'carpentry', sales: 16109, day: 'Friday' }
        ];
        assert.deepEqual("hardware", mostProfitableDepartment(sales))
    });
    it('should return carpentry as the most Profitable Department', function() {
        var sales = [
            { department: 'hardware', sales: 4500, day: 'Monday' },
            { department: 'outdoor', sales: 1500, day: 'Monday' },
            { department: 'carpentry', sales: 5555400, day: 'Monday' },
            { department: 'hardware', sales: 7500, day: 'Tuesday' },
            { department: 'outdoor', sales: 2505, day: 'Tuesday' },
            { department: 'carpentry', sales: 1540, day: 'Tuesday' },
            { department: 'hardware', sales: 1500, day: 'Wednesday' },
            { department: 'outdoor', sales: 8507, day: 'Wednesday' },
            { department: 'carpentry', sales: 8009, day: 'Wednesday' },
            { department: 'hardware', sales: 12000, day: 'Thursday' },
            { department: 'outdoor', sales: 18007, day: 'Thursday' },
            { department: 'carpentry', sales: 6109, day: 'Thursday' },
            { department: 'hardware', sales: 7005, day: 'Friday' },
            { department: 'outdoor', sales: 12006, day: 'Friday' },
            { department: 'carpentry', sales: 16109, day: 'Friday' }
        ];
        assert.deepEqual("carpentry", mostProfitableDepartment(sales))
    });
});