var moveZeroes = function(nums) {
    let l=nums.length
    for(let i=0;i<l;i++){
        if(nums[i]===0){
            nums.splice(i,1)
            nums.push(0)
            i--
            l--
        }
    }
    return nums
};
console.log(moveZeroes([0,2,3,0,2]))