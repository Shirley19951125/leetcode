// 非递归 深度优先遍历
var inorderTraversal = function(root) {
    let res=[],
        stk=[];
    while(stk.length||root){
        while(root){
            stk.push(root);
            root=root.left;
        }
        root=stk.pop();
        res.push(root.val);
        root=root.right;
    }
    return res;
};