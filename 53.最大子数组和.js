function maxSubArray(nums){
    let dp=[nums[0]]
    for(let i=1;i<nums.length;i++){
        if(dp[i-1]<0){
            dp[i]=nums[i]
        }else{
            dp[i]=dp[i-1]+nums[i]
        }
    }
    return Math.max(...dp)
}
console.log(maxSubArray([2,3,4,-1,0]))