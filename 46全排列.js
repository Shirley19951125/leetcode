var permute = function(nums) {
    let res=[],node=[];
    function backtracking(node){
        if(node.length===nums.length){
            res.push([...node]);
        }
        for(let i=0;i<nums.length;i++){
            if(node.includes(nums[i])) continue
           else{
            node.push(nums[i])
            backtracking(node)
            node.pop()
           }
        }
    }
    backtracking([]);
    return res;
};
console.log(permute([1,2,3]))