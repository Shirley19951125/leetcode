var lowestCommonAncestor = function(root, p, q) {
    let res
    // dfs表示以node为根节点的树中是否有p或q
    function dfs(node,p,q){
        if(node==null) return false
        const left=dfs(node.left,p,q)
        const right=dfs(node.right,p,q)
        if((left && right)||(node.val==p.val || node.val==q.val)&&(left || right)){
            res=node
        }
        return left || right || node.val==p.val || node.val==q.val
    }
    dfs(root,p,q)
    return res
};