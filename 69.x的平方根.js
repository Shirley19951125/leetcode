function mySqrt(x){
    let l=0,r=x,res
    while(l<r){
        let mid=Math.floor((l+r)/2)
        if(mid*mid===x) return mid
        else if(mid*mid<x){

            res=l
            l=mid+1

        }else{
            r=mid-1
        }
    }
    return res
}
console.log(mySqrt(10))