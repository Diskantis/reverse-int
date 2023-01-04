module.exports = function reverse (n) {
    const numStr = (Math.abs(n)).toString()
    let str = ''
    for (let i = numStr.length - 1; i >= 0; i--) {
        str += numStr[i]
    }
    return str
}
