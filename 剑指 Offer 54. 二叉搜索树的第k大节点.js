var kthLargest = function(root, k) {
    let res
    dfs(root)
    function dfs(node){
        if(!node) return
        dfs(node.right)
        k--
        if(k===0){
            res=node.val
            return
        }
        dfs(node.left)
    }
    dfs(root)
    return res
};