var postorderTraversal = function(root) {
    let res=[],
        stk=[];
    while(stk.length||root){
        while(root){
            stk.push(root);
            res.unshift(root.val);
            root=root.right;
        }
        root=stk.pop();

        root=root.left;
    }
    return res;
};