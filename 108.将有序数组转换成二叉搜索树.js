

var sortedArrayToBST = function(nums) {
    return toBST(nums,0,nums.length-1)
};
function toBST(nums,l,r){
    if(l>r) return null
    let mid=Math.floor((l+r)/2)
    const root=new TreeNode(nums[mid])
    root.left=toBST(nums,l,mid-1)
    root.right=toBST(nums,mid+1,r)
    return root
}