var isBalanced = function(root) {
    return check(root)!==-1
};
function check(node){
    if(node==null) return 0
    const left=check(node.left)
    const right=check(node.right)
    if(left===-1 || right===-1 || Math.abs(left-right)>1)
    return -1
    return Math.max(left,right)+1
}