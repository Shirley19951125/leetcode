var printNumbers = function(n) {
    let max=Math.pow(10,n)-1
    // while(n>0){
    //     max=max*10+9
    //     n--
    // }
    let res=[]
    for(let i=1;i<=max;i++){
        res.push(i)
    }
    return res
};
console.log(printNumbers(3))