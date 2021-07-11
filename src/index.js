module.exports = function reverse(n) {
    return +[...String(n)].filter(c => c !== '-').reverse().join('')
}
