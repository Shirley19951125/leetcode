var sumNums = function(n) {
    return n && n+sumNums(n-1)
};
console.log(sumNums(3))