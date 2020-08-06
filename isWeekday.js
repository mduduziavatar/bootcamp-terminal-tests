module.exports = function isWeekday(item) {
    console.log(item)
    return item.startsWith("M", "T", "W", "F")
}