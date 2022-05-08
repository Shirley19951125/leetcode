var permute = function(nums) {
    const result = [];
    function dfs(partialResult){
        console.log(partialResult)
        if(partialResult.length === nums.length){
            result.push(partialResult);
            return;
        }
        for(let i = 0, len = nums.length; i < len; i++){
            if(partialResult.includes(nums[i])) { continue };
            dfs(partialResult.concat(nums[i]));
        }
    }
    dfs([]);
    return result;
  };

  console.log(permute([1,2,3]))