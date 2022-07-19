function insertSort(nums){
    for(let i=1;i<nums.length;i++){
        let preIndex=i-1,cur=nums[i]
        while(preIndex>=0 && cur<nums[preIndex]){
            nums[preIndex+1]=nums[preIndex]
            preIndex--
        }
        nums[preIndex+1]=cur
    }
    return nums
}
console.log(insertSort([5,2,4,3,6]))