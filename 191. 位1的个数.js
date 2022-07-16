var hammingWeight = function(n) {
    let res=0,i=1
    for(let j=0;j<32;j++){
        if((n & i )!== 0) res++
        i=i<<1
        // 注意给i赋值
    }
    return res
};
 console.log(hammingWeight(5))

