module.exports = function mostProfitableDepartment(items) {
    var diffDepart = {};

    for (var x = 0; x < items.length; x++) {
        // have variable for currentDept that come from items
        var currentDept = items[x]
        var mostProfitable = currentDept.department
        var mostProfitableDept = currentDept.sales
            // sort keys out...
        if (diffDepart[mostProfitable] === undefined) {
            diffDepart[mostProfitable] = 0
        }
        diffDepart[mostProfitable] += mostProfitableDept;

        console.log(diffDepart)
        var oneDepart = ""
        var profit = 0
        for (y in diffDepart) {
            if (diffDepart[y] > profit) {
                oneDepart = y;
                profit = diffDepart[y]
            }
        }
    }
    return oneDepart
}