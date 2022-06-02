var myPow = function(x, n) {
    return n>0?quickMul(x,n):1/quickMul(x,-n)
};
// function quickMul(x,n){
//    if(n==0) return 1
//     let res,y
//     if(n%2===0){
//      y=quickMul(x,n/2)
//      res=y*y
//     }else{
//         y=quickMul(x,Math.floor(n/2))
//         res=y*y*x
//     }
//     return res
// }
function quickMul(x,n){
   let res=1
    while(n>0){

        if(n%2===0){

        }else{
            res*=x
        }
        x=x*x
        n=Math.floor(n/2)
    }
    return res
}
console.log(myPow(2,10))