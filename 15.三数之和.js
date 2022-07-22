function threeSum(nums){
    res=[]
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>0) break
        if(i>=1 && nums[i]===nums[i-1]) continue
        let j=i+1,k=nums.length-1
        while(j<k){
            let l=nums[j],r=nums[k]
            if(nums[i]+nums[j]+nums[k]===0){
                res.push([nums[i],nums[j],nums[k]])
                while(j<k && nums[j]===l) j++
                while(j<k && nums[k]===r) k--
            }else if(nums[i]+nums[j]+nums[k]<0){
                j++
            }else
            k--
        }
    }
    return res
}