var cuttingRope = function(n) {
    if(n<=3) return n-1
    let mod=n%3,div=Math.floor(n/3),res
    if(mod==1){
        res=Math.pow(3,div-1)*4
    }else if(mod==0){
        res=Math.pow(3,div)
    }else{
        res=Math.pow(3,div)*2
    }
    return res
};