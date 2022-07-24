function missingNumber(nums){
    const len=nums.length;
    let sum=(0+len)*(len+1)/2;
    for(let i=0;i<len;i++){
        sum-=nums[i];
    }
    return sum;
}