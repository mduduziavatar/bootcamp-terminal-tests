module.exports = function regCheck(regNumber, Area) {
    return regNumber.startsWith(Area) || regNumber.endsWith(Area)
}