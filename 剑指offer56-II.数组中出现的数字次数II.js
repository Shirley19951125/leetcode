var singleNumber = function(nums) {
   let res=0
    for(let i=0;i<32;i++){
        let ret=0
        for(let j=0;j<nums.length;j++){
            if((nums[j]&(1<<i))!==0) {
                ret++
                if(ret>2) ret=0
            }
        }
                res+=ret<<i
    }
    return res
};
console.log(singleNumber([9,1,7,9,7,9,7]))