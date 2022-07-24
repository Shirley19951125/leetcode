var isPowerOfThree = function(n) {
    if(n<3) return false
    while(n/3>=1){
        n=n/3
    }
    return n===1
}
console.log(isPowerOfThree(81))