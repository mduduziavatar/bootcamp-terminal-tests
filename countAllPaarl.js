module.exports = function countAllPaarl(regNumbers) {
    var unoPaarl = [];
    console.log(regNumbers)
    var paarl = regNumbers.split(", ")
    for (var y = 0; y < paarl.length; y++) {
        var allPaarl = paarl[y];
        if (allPaarl.startsWith("CJ")) {
            unoPaarl.push(allPaarl)
        }
    }
    return unoPaarl.length
}