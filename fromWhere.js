module.exports = function fromWhere(regNum) {
    if (regNum.startsWith('CY')) {
        return ('Bellville')
    } else if (regNum.startsWith('CA')) {
        return ('Cape Town')
    } else if (regNum.startsWith('CJ')) {
        return ('Paarl')
    } else {
        return ('Some other place!')
    }
}