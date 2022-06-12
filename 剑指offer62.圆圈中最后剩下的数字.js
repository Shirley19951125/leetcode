var lastRemaining = function(n, m) {
    let arr=[]
    for(let i=0;i<n;i++){
        arr.push(i)
    }
    let i=m-1
    while(arr.length>1){
        arr.splice(i,1)
        i+=(m-1)
      //  console.log('arr'+arr.length)
        if(i>=arr.length){
           // console.log('a')
            i%=arr.length
        }

    }
    return arr[0]
};
console.log(lastRemaining(5,3))