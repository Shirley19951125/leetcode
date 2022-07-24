var trailingZeroes = function(n) {
    if(n<5) return 0
    let res=0
    while(n/5>=1){
        n=Math.floor(n/5)
        res+=n
    }
    return res
};