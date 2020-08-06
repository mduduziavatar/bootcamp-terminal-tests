module.exports = function(regNumbers, town) {
    var fromStellies = [];
    console.log(regNumbers)
    var paarl = regNumbers.split(",")
    for (var y = 0; y < paarl.length; y++) {
        var allPaarl = paarl[y].trim();
        if (allPaarl.startsWith(town)) {
            fromStellies.push(allPaarl)
            console.log(fromStellies)
        }
    }
    return fromStellies.length
}