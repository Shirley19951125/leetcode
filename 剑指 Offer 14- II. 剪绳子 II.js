var cuttingRope = function(n) {
    if(n<=3) return n-1
    let mod=n%3,div=Math.floor(n/3),res
    function pow(basic,exp){
        let temp=1
        while(exp>0){
            let m=temp*basic
            if(m>1000000007){
                temp=m%1000000007
            }else{
                temp=m
            }
            exp--
        }
        return temp
    }
    if(mod==1){
        res=pow(3,div-1)*4%1000000007
    }else if(mod==0){
        res=pow(3,div)
    }else{
        res=pow(3,div)*2%1000000007
    }
    return res

};
console.log(cuttingRope())