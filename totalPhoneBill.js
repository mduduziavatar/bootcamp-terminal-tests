module.exports = function totalPhoneBill(bill) {
    var total = null;
    var phoneBill = bill.split(", ");
    console.log(bill)
    for (var x = 0; x < phoneBill.length; x++) {
        var totBill = phoneBill[x];
        if (totBill === "call") {
            total += 2.75
        } else if (totBill === "sms") {
            total += 0.65
        }
    }
    return "R" + total.toFixed(2)
}