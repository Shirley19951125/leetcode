function climbStairs(n){
    // let arr=[0,1]
    // for(let i=2;i<=n;i++){
    //     arr[i]=arr[i-1]+arr[i-2]
    // }
    // return arr[n]

    //使用递归会超时
    // if(n<=1) return 1
    // return climbStairs(n-1)+climbStairs(n-2)
    // if(n<=1) return 1
    // let d1=1,d2=1
    // for(let i=2;i<=n;i++){
    //     let d=d1+d2
    //     d1=d2
    //     d2=d
    // }
    // return d

    const arr=[1,1]
    return function(n){
        if(!arr[n]){
            arr[n]=arguments.callee(n-1)+arguments.callee(n-2)
        }
        return arr[n]
    }
}
console.log(climbStairs()(4))