var removeElement = function(nums, val) {
    let l=nums.length;
    for(let i=0;i<l;i++)
     {
        // console.log(nums[i]);
        if(nums[i]===val)
        {
            nums.splice(i,1);//删除数组中的元素，后边不要加空字符串
            l--;
            i--;

        }
    }
    return l;
};