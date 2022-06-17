var isNumber = function(s) {
    s=s.trim()
    if(!s) return false
    let reg=/^[+-]?(\d*\.?\d*)?([eE][+-]?\d+)?$/
    return reg.test(s)
};
console.log(isNumber('1.1'))