function selectionSort(nums){
    for(let i=0;i<nums.length-1;i++){
        let index=i
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]<nums[index]){
                index=j
            }
        }
        if(index!==i){
       [nums[index],nums[i]]=[nums[i],nums[index]]
       }
    }
    return nums
}
console.log(selectionSort([27,5,8,9,1,2,100]))