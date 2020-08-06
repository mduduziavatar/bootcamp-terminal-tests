module.exports = function findItemsOver(items, threshold) {
    var itemLists = [];
    for (var x = 0; x < items.length; x++)
        if (items[x].qty > threshold) {
            itemLists.push(items[x])
            console.log(itemLists)
        }
    return itemLists
}