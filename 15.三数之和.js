var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let res=[]
    for(let i=0;i<nums.length-2;i++){
        //第一个值为正数时，和必然不能为0
        if(nums[i]>0) break //避免产生重复数组
       if(i >=1 && nums[i-1]===nums[i]) continue
        let j=i+1,k=nums.length-1;
        let sum
        while(j<k){
            let l=nums[j],r=nums[k]
           sum =nums[i]+nums[j]+nums[k]
           //console.log(sum)
            if(sum>0){
                k--
            }else if(sum<0){
                j++
            }else{
                res.push([nums[i],nums[j],nums[k]])
                while(j<k && nums[j]===l) j++   // 避免产生重复数组
                while(j<k && nums[k]==r) k--    //避免产生重复数组
            }
        }
    }
    return res
};
console.log(threeSum([-1,0,1,2,-1,-4]))