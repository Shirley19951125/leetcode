var reverseLeftWords = function(s, n) {
    s=s.split('')
    let t=s.splice(0,n)
    s.push(...t)
    return s.join('')
};
console.log(reverseLeftWords('ancdefg',2))