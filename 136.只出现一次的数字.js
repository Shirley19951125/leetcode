//异或
var singleNumber = function(nums) {
    let init = nums[0];
    for(let i = 1; i < nums.length; i++){
        init ^=  nums[i];
    }
    return init;
  };