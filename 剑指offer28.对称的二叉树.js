var isSymmetric = function(root) {
    if(!root) return true
    return isSame(root.left,root.right)
};
function isSame(left,right){
    if(!left && !right) return true
    if(!left || !right) return false
    return left.val===right.val && isSame(left.left,right.right) && isSame(left.right,right.left)
}