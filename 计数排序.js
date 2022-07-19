function countSort(nums){
    let count=[],res=[]
    for(let i=0;i<nums.length;i++){
        count[nums[i]]=count[nums[i]]?count[nums[i]]+1:1
    }
    for(let i=0;i<count.length;i++){
        while(count[i]){
            res.push(i)
            count[i]--
        }
    }
    return res
}
console.log(countSort([5,4,3,1,2]))