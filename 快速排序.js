function quickSort(nums,low,high){
    low=typeof low==='number'?low:0
    high=typeof high==='number'?high:nums.length-1
    if(low<high){
        let pivot=partition(nums,low,high)
        quickSort(nums,low,pivot-1)
        quickSort(nums,pivot+1,high)
    }
    return nums
}
function partition(nums,low,high){
    let pivot=nums[low]
    while(low<high){
    while(low<high && nums[high]>pivot){
        high--
    }
    nums[low]=nums[high]
    while(low<high && nums[low]<=pivot){
        low++
    }
    nums[high]=nums[low]

}
    nums[low]=pivot
    return low
}


function quickSort(nums){
    if(nums.length<2) return nums
    const left =[], right=[]
    let mid=Math.floor(nums.length/2)
    for(let i=0;i<nums.length;i++){
        if(i===mid) continue
        if(nums[i]<nums[mid]) left.push(nums[i])
        else right.push(nums[i])
    }
    return quickSort(left).concat(nums[mid],quickSort(right))
}
console.log(quickSort([5,2,3,6,1,7,4]))