var add = function(a, b) {
    let c
    while(b!=0){
        // c表示a+b的进位
        c=(a&b)<<1
        a^=b
        b=c
    }
    return a
};
console.log(add(2,3))