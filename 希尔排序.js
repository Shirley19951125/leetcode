function hillSort(nums){
    let l=nums.length,gap=1
    while(gap < l/3){
        gap=gap*3+1
    }
    for(;gap>0;gap=Math.floor(gap/3)){
        for(let i=gap;i<nums.length;i+=gap){
            let cur=nums[i],preIndex=i-gap
            while(preIndex>=0 && cur<nums[preIndex]){
                nums[preIndex+gap]=nums[preIndex]
                preIndex-=gap
            }
            nums[preIndex+gap]=cur
        }
    }
    return nums
}
console.log(hillSort([5,2,4,2,3,6,10,88,99,77]))