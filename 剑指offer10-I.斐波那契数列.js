var fib = function(n) {
    let res=[0,1]
    for(let i=2;i<=n;i++){
        res[i]=(res[i-1]+res[i-2])%(1000000007)
    }
    return res[n]
};

var fib = function(n) {
    const MOD = 1000000007;
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q
    }
    return r%MOD
}

//递归超时
var fib=function(n){
    const MOD = 1000000007;
    if (n < 2) {
        return n;
    }
    return (fib(n-1)+fib(n-2))
}

console.log(fib(81))