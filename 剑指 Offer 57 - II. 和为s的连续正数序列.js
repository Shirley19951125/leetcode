var findContinuousSequence = function(target) {
   let l=1, r=2,sum=l+r,res=[]
   let mid=target<<1
   while(l<=mid){
   // console.log([l,r])
    if(sum<target){
        r++
        sum+=r
    }else if(sum>target){
        l++
        r=l+1
        sum=l+r
    }else{
        let arr=[]
        for(let i=l;i<=r;i++){
            arr.push(i)
        }
        res.push(arr)
        l++
        r=l+1
        sum=l+r
    }
   }
   return res
};
console.log(findContinuousSequence(10))