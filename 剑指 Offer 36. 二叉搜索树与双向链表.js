
var treeToDoublyList = function(root) {
    let pre,head
    if(!root) return null
    dfs(root)
    head.left=pre
    pre.right=head
    function dfs(cur){
        if(!cur) return
        dfs(cur.left)
        if(!pre) {
            head=cur;
        }else{
            pre.right=cur
            cur.left=pre
        }
        pre=cur
        dfs(cur.right)
    }
};