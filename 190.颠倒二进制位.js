function reverseBits(n){
    let result=0;
    while(n){
        result=(result<<1)+(n&1);
        n=n>>1;
    }
    return result>>>0;
}
console.log(reverseBits(9))