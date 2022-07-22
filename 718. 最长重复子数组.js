function findLength(nums1,nums2){
    let l1=nums1.length,l2=nums2.length,len=0,res=[],im
    let dp=new Array(l1)
    for(let i=0;i<l1;i++){
        dp[i]=[]
        for(let j=0;j<l2;j++){
          if(nums1[i]===nums2[j]){
              if(i==0 || j==0){
                  dp[i][j]=1
              }else{
                  dp[i][j]=dp[i-1][j-1]+1
              }
              if(len<dp[i][j]){
                  im=i
                  len=dp[i][j]
              }
          }
            else{
                dp[i][j]=0
            }
        }
    }
    // const dp=dp.flat()
    // while(dp.some(value=>Array.isArray(value))){
    //     dp=[].concat(...dp);
    // }

    // return Math.max(...dp)
    while(len){
        res.unshift(nums1[im])
        len--
        im--
    }
    return res
}
console.log(findLength([1,2,3,2,1],[3,2,1,4,7]))