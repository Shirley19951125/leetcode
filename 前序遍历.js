//递归
function preOrderTraversal(root){
    let res=[]
    function preOrder(root){
        if(!root) return
        res.push(root.val)
        preOrder(root.left)
        preOrder(root.right)
    }
    preOrder(root)
    return res
}

//非递归 深度优先遍历
function preOrderTraversal(root){
    let res=[],stk=[]
    while(root || stk.length){
        while(root ){
            res.push(root.val)
            stk.push(root)
            root=root.left
        }
        root=stk.pop()
        root=root.right
    }
    return res
}
