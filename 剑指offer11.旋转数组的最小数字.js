var minArray = function(nums) {
    for(let i=1;i<nums.length;i++){
        if(nums[i]<nums[i-1]) return nums[i]
        else continue
    }
    return nums[0]
};
console.log(minArray([2,2,2,0,1]))