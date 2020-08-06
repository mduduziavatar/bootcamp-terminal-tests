module.exports = function findItemsOver20(item) {
    var itemList = []
    for (var x = 0; x < item.length; x++)
        if (item[x].qty > 20) {
            itemList.push(item[x])
        }
    return itemList
}