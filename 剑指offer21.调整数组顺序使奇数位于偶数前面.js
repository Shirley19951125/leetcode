var exchange = function(nums) {
    let l=nums.length
    for(let i=0;i<l;i++){
        if(nums[i]%2===0){
             nums.push(nums[i])
            nums.splice(i,1)
            i--
            l--
        }
    }
    return nums
};


var exchange = function(nums) {
  let i=0,j=nums.length-1
  while(i<j){
      while(nums[i]%2!==0 && i<nums.length){
          i++
      }
      while(nums[j]%2===0 && j>=0){
          j--
      }
      if(i<j){
          [nums[i],nums[j]]=[nums[j],nums[i]]
      }

  }
  return nums
};

console.log(exchange([1,3,5]))