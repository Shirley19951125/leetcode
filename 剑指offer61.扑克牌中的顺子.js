var isStraight = function(nums) {
    const s=new Set()
    let min=14,max=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0) continue
        else{
            if(s.has(nums[i])) return false
            s.add(nums[i])
            min=Math.min(nums[i],min)
            max=Math.max(nums[i],max)
        }
    }
    // 最大值-最小值大于5就满足条件
    return max-min<5
};

var isStraight=function(nums){
    nums.sort()
    // 记录大小王的数量
    let joker=0
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]==0) {
            joker++
            continue}
        if(nums[i]==nums[i+1]){
            return false
        }

    }
    return nums[4]-nums[joker]<5
}
console.log(isStraight([0,0,1,2,5]))